import { useState } from "react"

const SimpleForm2 = () => {
    const [name, setName] = useState("")

    function handleSubmit(e){
         e.preventDefault(); 
        console.log("Name is: ", name);
    }
  return (
    <div><h2>SimpleForm2</h2>   
    <form onSubmit={handleSubmit}>

        <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        <button>Submit</button>
    </form>
    </div>
  )
}

export default SimpleForm2