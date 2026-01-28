import { useState } from "react"

const LikedButton = () => {
    const [like, setLike] = useState(false)

  return (
    <div>
        <button onClick={() => setLike(!like)}>
        {like ? "liked ❤" : "like ✔"} 
        </button>
    </div>
  )
}

export default LikedButton