function Button (){
    function printk(){
        console.log("Welcome Sir!")
    }
    return(
        <>
        <button  className="bg-gray-600 p-1.5 m-3.5  rounded-2xl pb-2 hover:text-white"  onClick={printk}>Say Welcome!</button>
        </>
    )
}
export default Button