import { useEffect, useState } from "react";
import "./index.css";

export const CleanUp = () => {
  const [count, setCount] = useState(0);

 //This is not a good way for Timer app
  // setInterval(()=>{
  //   setCount((prev) =>prev+1)
  // },1000)

  // Increment 2 2 so this is not good way clean after one iteration
  // useEffect(()=>{
  //   setInterval(()=>{
  //     setCount((prev) =>prev+1)
  //   },1000)
  // },[])


  useEffect(()=>{
    const timer = setInterval(()=>{
      setCount((prev) =>prev+1);
    },1000)

    return () => clearInterval(timer);
  },[])


  return (
    <div className="container">
      <div className="counter">
        <p>My Subscribers on Youtube</p>
        <div className="odometer" id="odometer">
          {count}
        </div>
        <h3 className="title">
          Subscribers <br /> Realtime Counter
        </h3>
      </div>
    </div>
  );
};
