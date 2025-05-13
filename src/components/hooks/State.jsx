import { useState } from "react";
export const State = () =>{
    // let count = 0;
    // const countButtonClick = () =>{
    //     count++;
    //     console.log(count);
    // };

    // let array = useState();
    // console.log(array);

    let[count, setCount] = useState(0);
    const handleCount = () =>{
        setCount(()=>count+1)
    }

    return(
        <>
        <div className="main-div">
            <h1>{count}</h1>
            <button onClick={handleCount}>Increment</button>
            {/* <button>Increment</button> */}
        </div>

        <ChildComponent count={count} />
        </>
    );
};

function ChildComponent({count}){
    console.log("Chile Component rendered");
    return (
        <div>
          <h1 className="text-center">child component - {count}</h1>
        </div>
      );
}