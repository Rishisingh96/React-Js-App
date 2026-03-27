import { useState } from "react";
import "./index.css";

export const ContactFrom = () =>{

    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");
    // const [phone, setPhone] = useState("");

    const [contacts, setContacts] = useState({
        username:"",
        email:"",
        message:"",
        phone:"",
    })

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setContacts((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form submitted");
        const contactData = {
            username: contacts.username,
            email: contacts.email,
            message: contacts.message,
            phone: contacts.phone
        };
        console.log(contactData);
    }
    return(
        <div className="container">
            <div className="card">
                <h1>
                    Contact From
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">UserName</label>
                        <input 
                        type="text" 
                        name="username"
                        id="name"
                        value={contacts.username}
                        placeholder="Enter your name"
                        // onChange={(e)=>setUsername(e.target.value)}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        // value={email}
                        value={contacts.email}
                        placeholder="Enter your email" 
                        // onChange={(e)=>setEmail(e.target.value)}
                        onChange={handleInputChange}
                        />
                    </div>
                    
                    <div className="form-group message-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                        name="message" 
                        id="message" 
                        value={contacts.message}
                        placeholder="Enter your message" 
                        // onChange={(e)=>setMessage(e.target.value)}
                        onChange={handleInputChange}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input 
                        type="phone" 
                        name="phone" 
                        id="phone" 
                        value={contacts.phone}
                        placeholder="Enter your phone" 
                        // onChange={(e)=>setPhone(e.target.value)}
                        onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group button-group">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}