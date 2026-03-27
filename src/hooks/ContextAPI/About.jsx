// import { useContext } from "react";
// import { BioContext } from ".";
import { useBioContext } from ".";

export const About = () => {
  const {myName,myAge} = useBioContext(); // ✅ hook at top level
 

  return (
    <section>
      <h1 className="text-7xl md:text-8xl font-semibold mb-5 text-center text-white">Hello Context API (About). My name is {myName}. I am {myAge} yrs old.</h1>
    </section>
  );
};
