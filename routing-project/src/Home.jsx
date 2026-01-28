import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Home (){
    let navigate = useNavigate()
    const [pass, setPass] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(pass)
        {pass === "React123" ? navigate("/secret") : alert(`your passkey is ${pass} `)}

    }
 return (
    <>
    <h2>Home component</h2>
    <form onSubmit={handleSubmit}>
        <input type="password" placeholder="Enter Your password!" value={pass} onChange={(e) => setPass(e.target.value)} />
        <button>Login </button>
    </form>
    </>
 )   
}