import './App.css'
function Test(){
    const headingStyle = {
        color:"red",
        textAlign: "center",
        backgroundColor:"pink",
        fontSize:"40px" 
    }
    return(
        <>
        <h2 style={headingStyle}>This h3 tag with  inline style in react </h2>

        <h2 style={{color:"green", textAlign:"center"}}>This is another inline css in react</h2>
        </>
    )
}
export default Test