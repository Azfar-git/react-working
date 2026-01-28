import { useState } from "react"

function MySimpleForm () {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
            console.log("Name: ",name);
            console.log("Email: ", email);

    }
  return (
      <>
      <h2>MySimpleForm</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="named">Name:</label>
        <input type="text" id="named" value={name} onChange={(e) => setName(e.target.value)}/>
        <br/>
        <label htmlFor="emaild">Email:</label>
        <input type="email" id="emaild" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button>Submit</button>
    </form>
    
    </>

  )
}

export default MySimpleForm