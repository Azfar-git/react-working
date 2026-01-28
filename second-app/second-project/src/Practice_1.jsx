function Practice_1({ user }){
    function show(name){
        return name;
    }

    const name = "dell"
    const named = "hp"
    // const user = "azfar"

    return(
        <>
        <h1>Welcome {user}!</h1>
        <p>this is practice component and its value of {show(name)} </p>
        <p>this is practice component and its value of {show(named)} </p>

        </>
    )
}
export default Practice_1