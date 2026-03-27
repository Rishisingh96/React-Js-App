// import { useContext } from "react";
// import { BioContext } from ".";

//or after using custom hooks
import { useBioContext } from ".";

export const Home = () => {
  // const {myName, myAge} = useContext(BioContext); // ✅ hook at top level
  const {myName, myAge} = useBioContext() // ✅ hook at top level
 

  return (
    <section>
      <h1 className="text-7xl md:text-8xl font-semibold mb-5 text-center text-white">Hello Context API. My name is {myName}. I am {myAge} yrs old.</h1>
    </section>
  );
};
