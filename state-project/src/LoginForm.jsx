import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // page reload stop
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <div>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="emailEnter">Enter your Email Address:</label>
        <input
          type="text"
          id="emailEnter"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="passwordEnter">Enter your Password:</label>
        <input
          type="password"
          id="passwordEnter"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <p>Your Email: {email}</p>
      <p>Your Password: {password}</p>
    </div>
  );
};

export default LoginForm;
