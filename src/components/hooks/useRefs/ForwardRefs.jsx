import React, { useRef } from "react";
import "./index.css";

export const ForwardRefs = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(usernameRef.current?.value);
        console.log(passwordRef.current?.value);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="username" ref={usernameRef} placeholder="Enter your name" />
            <br />
            <input type="text" id="password" ref={passwordRef} placeholder="Enter your Password" />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};