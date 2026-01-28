function Notice({ showNotice, message}){
    return(
        <>
        <h2>This is Short Circuit Rendering by using && condition </h2>
        {showNotice && <p>{message}</p>}
        </>
    )
}
export default Notice