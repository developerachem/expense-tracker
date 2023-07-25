import React from "react";
import { useState } from "react";

const IncomeTracker = () => {
  const [incomeList, setIncomeList] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleAddIncome = () => {
    if (amount && description) {
      const newIncome = { amount, description };
      setIncomeList([...incomeList, newIncome]);
      setAmount("");
      setDescription("");
    }
  };

  return (
    <div className="w-3/6 m-auto p-5 shadow mt-10 border">
      <h2>Income Tracker</h2>
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
        <button onClick={handleAddIncome}>Add Income</button>
      </div>
      <ul>
        {incomeList.map((income, index) => (
          <li key={index}>
            {income.description}: ৳{income.amount}
          </li>
        ))}
      </ul>
      <p>Total Amount: {totalAmount(incomeList)}</p>
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

export default IncomeTracker;
