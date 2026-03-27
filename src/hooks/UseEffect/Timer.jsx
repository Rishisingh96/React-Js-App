import { useEffect, useState } from "react";
import "./index.css"


const Timer = () =>{

    const [date, setDate] = useState(0)

    useEffect(()=>{
       setInterval(()=>{
        const updatedDate = new Date();
        setDate(updatedDate.toLocaleTimeString());  // setDate(updatedDate.toLocaleDateString());
       }, 1000) 
    },[]);

    return(
        <div className="container effect-container">
            <h1>Date : {date}</h1>
        </div>
    );
};

export default Timer;

