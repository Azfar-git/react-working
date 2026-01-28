import { useState } from "react";

const LoginForm2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [successMessage, setSuccessMessage] = useState("");

  // console.log(emailError)
  // console.log(passwordError)

  function handleSubmit(e) {
    e.preventDefault();
     setEmailError("");
    setPasswordError("");
    setSuccessMessage("");
    if (email === "") {
      setEmailError("Email is Required!");
    } if (password.length < 6) {
      setPasswordError("PassWord must be at least 6 Characters");
    } if(email !== "" && password.length >= 6){
      setSuccessMessage("Login Successfully")
    }

   
  }

  return (
    <div>
      <h1>LoginForm2 with Validation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="emailid">Enter you email</label>
        <input
          type="email"
          id="emailid"
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p style={{ color: "Blue" }}>{emailError}</p>}
        <br />
        <label htmlFor="passwordId">Enter your password</label>
        <input
          type="password"
          id="passwordId"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <br />
        <button>Submit</button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default LoginForm2;
