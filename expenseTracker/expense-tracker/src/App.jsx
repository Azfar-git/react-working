import { useState, useEffect } from 'react'
import './App.css'
import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'

function App() {
  const [expenses, setExpenses] = useState(()=>{
    const saved = localStorage.getItem("exp")
    return saved ? JSON.parse (saved) : []
  });
    // 1st function for storing data in state varible
  const addExpense = (expense) =>{
    setExpenses((prev)=>[...prev, expense])
    
  }
  useEffect(()=>{
    localStorage.setItem("exp", JSON.stringify(expenses))

  },[expenses])
// 2nd function for delete data from store varible

const deleteExpense =(id) =>{
  setExpenses((prev)=> prev.filter((item)=> item.id != id))
}
const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <h3 className='total'>Total Expense: ${totalExpense.toFixed(2)}</h3> 
      <ExpenseList expenses={expenses} onDelete={deleteExpense}/>
    </div>
  )
}

export default App
