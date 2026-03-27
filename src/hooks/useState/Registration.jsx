//* Registration Form Using Multiple State Variables

//todo  Tasks:

//? Set up a functional component in React.
//? Create five separate state variables (firstName, lastName, email, password, phoneNumber).
//? Create input fields for each piece of information.
//? Implement onChange handlers to update state variables.
//? Discuss the benefits and drawbacks of this approach.

import "./index.css";
import { useState } from "react";

export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");   
  const [phoneNumber, setPhoneNumber] = useState("");

// Handle input change for all fields
  // const handleInputChange =(e)=>{
  //   // const { name, value } = e.target;
  //   // console.log(name, value);
  //   setFirstName(e.target.value);
  //   setLastName(e.target.value);
  //   setEmail(e.target.value);
  //   setPassword(e.target.value);    
  //   setPhoneNumber(e.target.value);
  // };

    const handleInputChange =(e)=>{
    const { name, value } = e.target;

    switch(name){
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Here you can handle the form submission, e.g., send data to a server
    console.log("Form submitted with data:", {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });

    // Reset the form fields after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
  }

  return (
    <>
      <section
        className="summary"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        <p>
          Hello, my name is
          <span>
            {firstName || lastName ? `${firstName} ${lastName}` : '_____'}
          </span>
          . My email address is <span>{email || '_____'}</span> and my phone number is
          <span>{phoneNumber || '_____'}</span>.
        </p>
      </section>

      <form onSubmit={handleFormSubmit} >
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={lastName}
            onChange={handleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={password}
            onChange={handleInputChange}
          />

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>

          <input
            type="phone"
            name="phoneNumber"  // he because the input type is phoneNumber, it should be "phone" not "phoneNumber"
            placeholder="9876543211"
            required
            value={phoneNumber}
            onChange={handleInputChange}
          />

          <p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
