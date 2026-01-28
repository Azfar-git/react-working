import { useEffect, useState} from 'react'

function Second() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(()=>{
        document.title =`Total count: ${count}`
        console.log('second component render')
    },[count])
  return (
    <div><h1>This is another component if count change useEffect show in console otherwise name change no change in console and see change the title..</h1>
    <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)}/>
    <h2>Your name is: {name}</h2>
    <h2>Your count is: {count}</h2>
    <button onClick={()=> setCount(count + 1)}>Increament</button>
    
    </div>
  )
}

export default Second