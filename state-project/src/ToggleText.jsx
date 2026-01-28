import { useState } from "react"

const ToggleText = () => {

    const [isVisible, setIsVisible] = useState(false)   
  return (
    <div>

        <button onClick={() =>setIsVisible(!isVisible)}>
    {isVisible ? "Hide" :"show"}Text

        </button>

        {isVisible && <p>this is message show when condition is true</p>}
    </div>
  )
}

export default ToggleText