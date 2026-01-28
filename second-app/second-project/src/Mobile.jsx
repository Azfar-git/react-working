function Mobile ({ brand, model, price, isNew }){
let condition = isNew ? 'New' :'used' 
// console.log(condition)
return(
    <>
    <p>This is mobile brand is {brand}, & model is {model}, price is Rs. {price.toLocaleString()} & this is {condition} Mobile</p>
    </>
)
}
export default Mobile