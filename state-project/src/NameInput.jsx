import { useState } from "react"

function NameInput() {
    const [name, setName] = useState("")
  return (
    <div>
        <label>Enter you Name:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <p>your name is: {name}</p>
    </div>
  )
}

export default NameInput