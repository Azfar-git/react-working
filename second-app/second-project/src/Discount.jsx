function Discount ({price, isSale}){
return(
    <>
    <h2>Another task of condition rendering in react by using  Ternary Condition</h2>
    {isSale === true ? <p>Sale Price: Rs. {price}. (Discound Applied)</p> : <p>Regular Price: Rs. {price}</p>}
    </>
)
}
export default Discount