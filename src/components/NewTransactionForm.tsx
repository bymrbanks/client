import { empty } from "@prisma/client/runtime/library";
import React, { useState } from "react";
import { useBudget } from "~/context/budget";

function NewTransactionForm({ currentSection }: { currentSection: string }) {
  const { transactions, addTransaction } = useBudget();
  const emptyTransaction = {
    id: (transactions.length + 1).toString(),
    name: "",
    description: "Transaction" + (transactions.length + 1).toString(),
    amount: 0,
    date: new Date(),
    category: "",
    categoryClass: currentSection,
    fixed: false,
  };

  const [newTransactionCategory, setNewTransactionCategory] = useState("");
  const [newTransaction, setNewTransaction] = useState(emptyTransaction);
  const [modalActive, setModalActive] = useState(true);

  const addNewTransaction = () => {
    if (
      !newTransaction.name ||
      !newTransaction.amount
      // !newTransaction.category
    )
      return alert("Please fill out all fields");
    addTransaction({ ...newTransaction, date: new Date() });
    setModalActive(modalActive ? false : true);

    // clear the form
    setNewTransaction(emptyTransaction);
  };

  return (
    <>
      <button
        className="add-transaction__btn"
        onClick={() => setModalActive(modalActive ? false : true)}
      >
        +
      </button>
      <div
        className={
          modalActive
            ? "add-transaction__modal"
            : "add-transaction__modal add-transaction__modal--active"
        }
      >
        <div
          className="add-transaction__overlay"
          onClick={() => setModalActive(modalActive ? false : true)}
        >
          {" "}
        </div>
        <div className="add-transaction">
          <h3>Add new transaction</h3>
          <input
            type="text"
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, name: e.target.value })
            }
            value={newTransaction.name}
            placeholder="Transaction Name"
          />
          {/* create a select in put for the category */}
          <select
            onChange={(e) => setNewTransactionCategory(e.target.value)}
            value={newTransactionCategory}
          >
            <option value="">-- Choose A Category --</option>
            <option value="loans">Loans</option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
            <option value="bills">Bills</option>
            <option value="other">Other</option>
          </select>
          <input
            placeholder="Transaction Value"
            type="number"
            onChange={(e) =>
              setNewTransaction({
                ...newTransaction,
                amount: Number(e.target.value),
              })
            }
            value={newTransaction.amount}
          />
          <br />
          <input
            type="checkbox"
            name="fixed"
            value={newTransaction.fixed.toString()}
            onChange={(e) =>
              setNewTransaction({ ...newTransaction, fixed: e.target.checked })
            }
          />
          <button className="" onClick={() => addNewTransaction()}>
            add new transaction
          </button>
        </div>
      </div>
    </>
  );
}

export default NewTransactionForm;
