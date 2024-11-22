import React, { useState } from "react";

function BudgetForm({ setBudget, addExpense }) {
  const [budget, setBudgetValue] = useState(""); // Separate state for budget
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (name && amount > 0) {
      addExpense({ name, amount: parseFloat(amount) });
      setName("");
      setAmount("");
    }
  };

  return (
    <div>
      <form>
        <h3>Set Total Budget</h3>
        <input
          type="number"
          placeholder="Total Budget"
          value={budget} // Use separate state for budget input
          onChange={(e) => setBudgetValue(parseFloat(e.target.value) || "")}
          style={{ appearance: 'none' }} // Remove input increment/decrement arrows
        />
        <h3>Add an Expense</h3>
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Expense Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ appearance: 'none' }} // Remove input increment/decrement arrows
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </form>
    </div>
  );
}

export default BudgetForm;
