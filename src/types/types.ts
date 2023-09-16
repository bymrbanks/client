// types.ts
export interface Transaction {
    id: string;
    description: string;
    name: string;
    amount: number; // positive for income, negative for expenses
    date: Date;
    category: string;
    categoryClass: string;
    fixed: boolean;
}

export interface BudgetSection {
    title: string;
    id: string;
    slug: string;
}


export interface BudgetContextType {
    transactions: Transaction[];
    sections: BudgetSection[];
    addSection: (budgetSection: BudgetSection) => void;
    deleteSection: (id: string) => void;
    updateTransaction: (transaction: Transaction) => void;
    addTransaction: (transaction: Transaction) => void;
    deleteTransaction: (id: string) => void;
    updateSection?: (section: BudgetSection) => void;
    selectedMonth: Date;
    setSelectedMonth: (date: Date) => void;
}
