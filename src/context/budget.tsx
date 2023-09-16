// BudgetContext.tsx
import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
import { Transaction, BudgetContextType, BudgetSection } from "~/types/types";
// get transactions from prisma
import { api } from "~/utils/api";

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

type Action =
  | { type: "ADD_TRANSACTION"; payload: Transaction }
  | { type: "DELETE_TRANSACTION"; payload: string }
  | { type: "UPDATE_TRANSACTION"; payload: Transaction }
  | { type: "ADD_SECTION"; payload: BudgetSection }
  | { type: "DELETE_SECTION"; payload: string };

type BudgetProviderProps = {
  children: React.ReactNode;
};


const sectionReducer = (
  state: BudgetSection[],
  action: Action
): BudgetSection[] => {
  switch (action.type) {
    case "ADD_SECTION":
      return [...state, action.payload];
    case "DELETE_SECTION":
      return state.filter((section) => section.id !== action.payload);
    default:
      return state;
  }
};

export const BudgetProvider: React.FC<BudgetProviderProps> = ({ children }) => {
  // const [transactions, transactionDispatch] = useReducer(transactionReducer,  []);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const transactionQuery = api.transaction.getAll.useQuery();
  const newTransaction = api.transaction.add.useMutation();
  const removeTransaction = api.transaction.delete.useMutation();
  const editTransaction = api.transaction.update.useMutation();

  useEffect(() => {
    if (transactionQuery.data) {
      setTransactions(transactionQuery.data);
    }
  }, [transactionQuery.data]);

  const displayedTransactions = transactions.filter((transactions) => {
    console.log(transactions.fixed);

    if (transactions.fixed) {
      if (selectedMonth.getFullYear() == transactions.date.getFullYear()) {
        return transactions.date.getMonth() >= selectedMonth.getMonth();
      }
    }
    return !transactions.fixed;
  });

  const [sections, sectionDispatch] = useReducer(sectionReducer, [
    {
      id: "1",
      title: "Income",
      slug: "income",
    },
    {
      id: "2",
      title: "Food",
      slug: "food",
    },
    {
      id: "3",
      title: "Investments",
      slug: "investments",
    },
    {
      id: "4",
      title: "Savings",
      slug: "savings",
    },
  ]);

  const addTransaction = (transaction: Transaction) => {
    newTransaction.mutate(transaction, {
      onSuccess: () => {
        transactionQuery.refetch();
      },
    });
  };

  const deleteTransaction = (id: string) => {
    removeTransaction.mutate(
      { id },
      {

        onSuccess: () => {

          transactionQuery.refetch();
        },
      }
    );
  };

  const updateTransaction = (transaction: Transaction) => {
    editTransaction.mutate(transaction, {
      onSuccess: () => {
        transactionQuery.refetch();
      },
    });
  };

  // create new section
  const addSection = (section: BudgetSection) => {
    sectionDispatch({ type: "ADD_SECTION", payload: section });
  };

  // delete section
  const deleteSection = (id: string) => {
    sectionDispatch({ type: "DELETE_SECTION", payload: id });
  };

  return (
    <BudgetContext.Provider
      value={{
        transactions: displayedTransactions,
        sections,
        selectedMonth: selectedMonth,
        addTransaction,
        deleteTransaction,
        updateTransaction,
        addSection,
        deleteSection,
        setSelectedMonth,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = (): BudgetContextType => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudget must be used within a BudgetProvider");
  }
  return context;
};
