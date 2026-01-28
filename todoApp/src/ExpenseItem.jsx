function ExpenseItem({items, onDelete}) {
  return (
    <>
  <span>{items.expense}</span>
  <span>$ {items.amount}</span>
    <button onClick={()=>onDelete(items.id)}> X</button><br />
    </>
  )
}

export default ExpenseItem