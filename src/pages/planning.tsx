import React, { use, useEffect, useState } from "react";
import NewTransactionForm from "~/components/NewTransactionForm";
import TransactionList from "~/components/TransactionList";
import MonthlySlider from "~/components/MonthlySlider";
import { useBudget } from "~/context/budget";
import Layout from "~/components/layouts";
function Planning() {
  const { transactions, sections, addSection, deleteSection } = useBudget();

  const budgetTotal = transactions.reduce((acc, curr) => {
    return curr.categoryClass != "income" ? acc + curr.amount : acc;
  }, 0);

  // sum all with the categoryClass of income
  const incomeTotal = transactions.reduce((acc, curr) => {
    return curr.categoryClass === "income" ? acc + curr.amount : acc;
  }, 0);

  return (
    <Layout>
      <div className="budget__screen">
        <div className="budget__numbers">
          <div className="budget__unplanned-total">
            <span>Total Planned Expense:</span>
            <br />${budgetTotal}
          </div>
          <div className="budget__left-budget">
            {incomeTotal - budgetTotal < 0 ? (
              <span className="budget__left-budget">
                ${incomeTotal - budgetTotal} over budget
              </span>
            ) : (
              <span className="budget__left-budget">
                ${incomeTotal - budgetTotal} left to budget
              </span>
            )}
          </div>
          {/* <span>income: ${incomeTotal}</span> */}
        </div>

        <MonthlySlider />

        {sections.map((section) => (
          <div className="budget-section" key={section.id}>
            <div className="budget-section__header">
              <h3>{section.title}</h3>
              {section.slug !== "income" &&
                section.slug !== "savings" &&
                section.slug !== "food" &&
                section.slug !== "investments" && (
                  <button
                    className="transaction__delete"
                    onClick={() => deleteSection(section.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                    >
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  </button>
                )}
            </div>
            <div className="transaction__container">
              <TransactionList sectionSlug={section.slug} />
            </div>
            <NewTransactionForm currentSection={section.slug} />
          </div>
        ))}

        <button
          className="btn btn--simple btn--centered"
          onClick={() =>
            addSection({
              id: sections.length + 1 + "",
              title: "New Section " + sections.length,
              slug: "new-section-" + sections.length,
            })
          }
        >
          New Section
        </button>
      </div>
    </Layout>
  );
}

export default Planning;
