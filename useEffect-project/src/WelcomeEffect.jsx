import { useEffect } from "react"

function WelcomeEffect() {
    useEffect(() =>{
        console.log(`Welcome to React Week 3`)
    },[])

  return (
    <div>
        <h2>UseEffect Working!! </h2>

    </div>
  )
}

export default WelcomeEffect