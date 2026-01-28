import { useState } from "react"

const MultiInput = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        age:""
    })
function handleSubmit(e){
    e.preventDefault();
    console.log(formData);

}
function handleChange (e){
const { name, value } = e.target
        setFormData((prev) => ({
        ...prev, [name]: value

}))
}
  return (

    <div>
        <h2>Multi Input Field Form</h2><br/>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/><br/>
        <input type="email" placeholder="Email"  name="email" value={formData.email} onChange={handleChange}/><br/>
        <input type="number" placeholder="Age" name="age" value={formData.age} onChange={handleChange}/><br/>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default MultiInput