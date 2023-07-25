import React, { useState } from "react";

const ExpenseTracker = () => {
  const [expenseList, setExpenseList] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleAddExpense = () => {
    if (amount && description) {
      const newExpense = { amount, description };
      setExpenseList([...expenseList, newExpense]);
      setAmount("");
      setDescription("");
    }
  };
  console.log(expenseList);

  return (
    <div className="w-3/6 m-auto p-5 shadow mt-10 border">
      <h2>Expense Tracker</h2>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      <ul>
        {expenseList.map((expense, index) => (
          <li key={index}>
            {expense.description}: ৳{expense.amount}
          </li>
        ))}
      </ul>
      <p>Total Amount: {totalAmount(expenseList)}</p>
    </div>
  );
};

function totalAmount(arr) {
    return arr.reduce(
        (totalSum, obj) =>
          Number(totalSum) +
          (obj.hasOwnProperty("amount") ? Number(obj.amount) : 0),
        0
    );
 }

export default ExpenseTracker;
