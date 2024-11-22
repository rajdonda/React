import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const balance = totalBudget - totalExpenses;

  const handleSetBudget = (e) => {
    e.preventDefault();
    setTotalBudget(Number(expenseAmount));
    setExpenseAmount("");
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (expenseTitle && expenseAmount > 0) {
      setExpenses([...expenses, { id: Date.now(), title: expenseTitle, amount: Number(expenseAmount) }]);
      setExpenseTitle("");
      setExpenseAmount("");
    }
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="container">
      <h1>Budget Tracker</h1>
      <div className="budget-section" style={{ border: '2px solid #4CAF50', borderRadius: '10px', padding: '20px', marginBottom: '20px', backgroundColor: '#f9f9f9' }}>
        <form onSubmit={handleSetBudget}>
          <h2>Total Budget</h2>
          <input
            type="number"
            placeholder="Enter Total Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            style={{ padding: '10px', margin: '10px 0', width: '100%', borderRadius: '5px', border: '1px solid #ccc', appearance: 'none' }}
          />
          <button type="submit" style={{ padding: '10px 15px', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>Set Budget</button>
        </form>
      </div>
      <div className="expense-section" style={{ border: '2px solid #f44336', borderRadius: '10px', padding: '20px', marginBottom: '20px', backgroundColor: '#f9f9f9' }}>
        <form onSubmit={handleAddExpense}>
          <h2>Add Expense</h2>
          <input
            type="text"
            placeholder="Enter Expense Title"
            value={expenseTitle}
            onChange={(e) => setExpenseTitle(e.target.value)}
            style={{ padding: '10px', margin: '10px 0', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="number"
            placeholder="Enter Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            style={{ padding: '10px', margin: '10px 0', width: '100%', borderRadius: '5px', border: '1px solid #ccc', appearance: 'none' }}
          />
          <button type="submit" style={{ padding: '10px 15px', borderRadius: '5px', backgroundColor: '#f44336', color: 'white', border: 'none' }}>Add Expense</button>
        </form>
      </div>
      <div className="summary-section">
        <div className="summary-card">
          <h3>Total Budget</h3>
          <p>${totalBudget}</p>
        </div>
        <div className="summary-card">
          <h3>Total Expenses</h3>
          <p>${totalExpenses}</p>
        </div>
        <div className="summary-card">
          <h3>Balance</h3>
          <p>${balance}</p>
        </div>
      </div>
      <div className="expense-list">
        <h2>Expense List</h2>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <span>{expense.title}</span>
              <span>${expense.amount}</span>
              <button onClick={() => handleDeleteExpense(expense.id)}>🗑</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
