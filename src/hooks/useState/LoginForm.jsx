import "./index.css";
import { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  //Method 1:   handleInputChange is a function that is used to handle the input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const loginData = {
      username,
      password,
    }
    console.log(loginData);

    // Here you can add login logic
    // For now, just reset the form
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <section className="summary" style={{ textAlign: "center", marginBottom: "20px" }}>
        <p>
          Welcome back! You are logging in as <span>{username || "_____"}</span>
        </p>
      </section>

      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>Login Form</h1>
          <p>Please enter your credentials to access your account.</p>

          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            required
            autoComplete="off"
            value={username}

            // method 1: call the handleInputChange function
            // onChange={handleInputChange}

            // method 2: setUsername(e.target.value)
            onChange={(e)=>setUsername(e.target.value)}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            autoComplete="off"
            value={password}

            // method 1: call the handleInputChange function
            // onChange={handleInputChange}

            // method 2: setPassword(e.target.value)
            onChange={(e)=>setPassword(e.target.value)}
          />

          <p>
            Don't have an account? 
            <a href="#" style={{ color: "dodgerblue" }}>
              Sign up here
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
