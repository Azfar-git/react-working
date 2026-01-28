import ExpenseItem from './ExpenseItem'

function ExpenseList({ expenseData, onDeleteExpense }) {

  if(expenseData.length === 0){
    return <p>No expense Found!!</p>
  }
  return (
    <>
    {expenseData.map((item)=>
    
    <ExpenseItem key={item.id} items={item} onDelete={onDeleteExpense} /> 
    )}
    </>  
  )
} 

export default ExpenseList