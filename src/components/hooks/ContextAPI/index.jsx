import { createContext } from "react";

// Step 1: Create Context
export const BioContext = createContext();

// Step 2: Create Provider
export const BioProvider = ({ children }) => {
  const myName = "Rishi Singh";
  const myAge = 30;
  console.log(children);
  
  return (
    // <BioContext.Provider value={(myName,myAge)}>
    <BioContext.Provider value={{myName:myName,myAge:myAge}}>
      {children}
    </BioContext.Provider>
  );
};
