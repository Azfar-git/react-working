import { useState } from "react"

const MultiForm2 = () => {
    const [myFormData, setMyFormData] = useState({
        name:"",
        email:"",
        age:""
    })
    function handleSubmit(e){
        e.preventDefault();
        console.log(myFormData)

    }
    function handleChange(a){
        const { name, value } = a.target;
        setMyFormData ((prev) => ({
            ...prev, [name]: value
        }))

    }


  return (
    <div><h2>MultiForm2</h2>
    <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Enter you Name" 
            name="name" 
            value={myFormData.name}
            onChange={handleChange}/> 
             <br />
            <input type="email" 
            placeholder="Enter your Email"
            name="email"
            value={myFormData.email}
            onChange={handleChange}/>
             <br />
            <input type="number" 
            placeholder="Enter your Age"
            name="age" 
            value={myFormData.age}
            onChange={handleChange}/>
             <br />
    <button>Submit</button>
    </form>
    </div>
  )
}

export default MultiForm2