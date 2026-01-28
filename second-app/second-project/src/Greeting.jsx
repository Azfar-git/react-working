function Greeting({name, isLoggedIn}){
    return(
        <>
        {isLoggedIn === true ? <h2>Welcome {name}!</h2> : <h2>Please login First!!!</h2>}
        </>
    )
}
export default Greeting