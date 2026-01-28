import { useEffect } from "react"

function Cleanup() {
    useEffect(()=>{
            const timer = setInterval(() =>{
                console.log(`Time is running...`)
            },1000)
            return()=>{
                clearInterval(timer)
            }
    },[])
  return (
    <div>
        <h2>Cleanup!!</h2>
    </div>
  )
}

export default Cleanup