// import { getDatabase, ref, set } from 'firebase/database'
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { app } from "./firebase"
import Signup from './pages/signup'
import './App.css'
// const db =  getDatabase(app)

const auth = getAuth(app)
function App() {
  // const putData = () =>{
  //     set(ref(db, "users/azfar"), {
  //       id: 1,
  //       name: "azfar 333",
  //       age:23,
  //     })
  // } 

  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth, 
      "abcd@gmail.com",
      "12345678910"
    ).then((value) => console.log(value))
  }


return (
    <>
      <h1>FireBase React App</h1>
      {/* <button onClick={putData}>Put Data</button> */}
      <button onClick={signupUser}>Create User</button>
      <Signup />

    </>
  )
}

export default App
