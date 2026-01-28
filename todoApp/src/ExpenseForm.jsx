import { useState } from "react"

function ExpenseForm({ onAddExpense }) {
  const [expense, setExpense] = useState("")
  const [amount, setAmount] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    // console.log([expense, amount])

    const expData = {
      id: Date.now(),
      expense,
      amount:parseFloat(amount)
    }

    // data binding
    onAddExpense(expData)
    setExpense("")
    setAmount("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Your Expense' value={expense} onChange={(e)=>setExpense(e.target.value)} />
        <input type="number" placeholder='Enter Expense amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ExpenseForm