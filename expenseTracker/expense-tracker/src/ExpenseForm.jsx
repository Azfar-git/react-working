import {useEffect, useState} from 'react'

function ExpenseForm({ onAddExpense }) {
const [title, setTitle] = useState("")
const [amount, setAmount] = useState("")

const handleSubmit = (e) =>{
  // not page refresh
  e.preventDefault();

  // condition 
  if(!title || !amount) return alert("Please fill all fields!")

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount)
    }

    // saving data by using prop 

    onAddExpense(newExpense)
    setTitle("")
    setAmount("")
}

  return (
    <form className='expense-form' onSubmit={handleSubmit}>
        <input type="text" placeholder='Expense Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="number" placeholder='Amount $' value={amount} onChange={(e) => setAmount(e.target.value)}/>
         <button type='submit'>Add Expense</button>
    </form>
  )
}

export default ExpenseForm