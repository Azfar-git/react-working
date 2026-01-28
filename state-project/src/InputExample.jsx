import { useState } from "react"

function InputExample() {
    const [name, setName] = useState("")

  return (
    <div>

    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <h2>Hello, {name || "Guest"}</h2>
    </div>
  )
}   

export default InputExample