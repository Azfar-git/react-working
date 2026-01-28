function Content (){
    function getName(){
        return "yahoo baba"
    }
    function getFullName(fullname){
        return fullname;
    }
    const handleInput = (eve) =>{
        console.clear()  // all clear in console
        console.log("values : ", eve.target.value)
    }

    const name = "azfar";

    return (
    <>
    <h1>This is another component</h1>
    <h2>This function we call like this {getName()} this is is return in function call getName</h2>
    <h2>This is function with parameter {getFullName(name)}</h2>
    <input type="text" placeholder="write something" onChange={handleInput}/>
    </>
)                       
}
export default Content