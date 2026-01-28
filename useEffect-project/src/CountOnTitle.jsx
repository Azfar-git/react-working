import { useEffect, useState } from "react"

function CountOnTitle() {
    const [count, setCount] = useState(0)

    useEffect(() =>{
        document.title = `Counter : ${count}`
    },[count])

    const handleChange = () =>  {
         setCount(count + 1);
    }
  return (
    <div>
        <h2>CountOnTitle</h2>

        <button onClick={handleChange} >Increament!!</button>
        <h3>Increament Value is {count}</h3>
    </div>
  )
}

export default CountOnTitle