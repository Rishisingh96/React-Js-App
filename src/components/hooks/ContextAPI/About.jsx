import { useContext } from "react";
import { BioContext } from ".";

export const About = () => {
  const {myName,myAge} = useContext(BioContext); // ✅ hook at top level
 

  return (
    <h1>Hello Context API (About). My name is {myName}. I am {myAge} yrs old.</h1>
  );
};
