import React from "react";
import BudgetListItem from "./BudgetListItem";

function BudgetList({ expenses, deleteExpense, budget }) {
  return (
    <div>
      <h3>Expense List</h3>
      <ul>
        {expenses.map((expense, index) => (
          <BudgetListItem
            key={index}
            expense={{ ...expense, budget }} // Update expense to include budget
            onDelete={() => deleteExpense(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default BudgetList;
