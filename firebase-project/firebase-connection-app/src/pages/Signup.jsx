import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { app } from "../firebase"


const auth = getAuth(app)
function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = () =>{
        createUserWithEmailAndPassword(auth, email, password).then(value => alert("userCreateSuccessFull"))
        setEmail("")
        setPassword("")
    }
  return (
    <div>
        <h1>Sign page</h1>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Enter you email"/>
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Enter you password" />
        <button onClick={createUser}>SignUp</button>
    </div>
  )
}

export default Signup