import { useState, useEffect } from 'react'

function First() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("render component")
        clearInterval(count)
    },[count])
  return (
    <div>
        <h1>My first useEffect component named First.jsx</h1>
        <h2>Total count: {count}</h2>
        <button onClick={()=> setCount(count + 1)}>Increament</button>

    </div>
  )
}

export default First