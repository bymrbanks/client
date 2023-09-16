import React from "react";

import { useBudget } from "~/context/budget";
import TransactionItem from "./TransactionItem";
const TransactionList = ({ sectionSlug }: { sectionSlug: string }) => {
  const { transactions, deleteTransaction } = useBudget();

  return (
    <div className="transaction_list">
      {transactions.map((transaction) => {
        if (transaction.categoryClass === sectionSlug) {
          return <TransactionItem key={transaction.id} transaction={transaction} />;
        }else{
          return null
        }
      })}
    </div>
  );
};

export default TransactionList;
