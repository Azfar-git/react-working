import { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function App() {
  const [data, setData] = useState(() => {
    const storeData = localStorage.getItem("exps");
    return storeData ? JSON.parse(storeData) : [];
  });
  useEffect(() => localStorage.setItem("exps", JSON.stringify(data)), [data]);

  const savedData = (exp) => {
    setData((prev) => [...prev, exp]);
    // console.log(exp)
  };

  const onDeleteExpense = (id) => {
    setData((prev1) => prev1.filter((item) => item.id != id));
  };
  const totalExpense = data.reduce((sum, item) => sum + item.amount, 0)

  return (
    <>
      <h1>Practice Projects</h1>
      <div>
        <h1>Expense Tracker</h1>
        <ExpenseForm onAddExpense={savedData} />
        <h3>Total Expense: {totalExpense.toFixed(2)}</h3>
        <ExpenseList expenseData={data} onDeleteExpense={onDeleteExpense} />
      </div>
    </>
  );
}

export default App;
