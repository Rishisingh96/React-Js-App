import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch = () =>{
    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch  = () =>{
        setIsOn(!isOn);
    };

    return(
       <>
       <h1 style = {{color : "#000", textAlign : "center"}}> Toggle Switch {}
       <IoIosSwitch style={{ color: "red", textAlign: "center" }} />
        </h1>
   
        <div className="toggle-switch" 
        style={{ backgroundColor: isOn ? "#4caf50" : "#f44336"}}
        onClick={handleToggleSwitch}>
            <div className={`switch ${isOn ? "on":"off"}`}>
                <span className="switch-state">{isOn ? "On" : "off"}</span>
            </div>
        </div>
       
       </>
    );
};