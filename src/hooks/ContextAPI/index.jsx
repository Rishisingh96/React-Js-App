import { createContext, useContext } from "react";

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


// custom hooks 
export const useBioContext =() =>{
  const context = useContext(BioContext);
  if(context === undefined){
    throw new Error("useBioContext must be used within a BioProvider");
  }
  return context;
}