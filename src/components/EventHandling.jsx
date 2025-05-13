import "./EV.css";

export const EventHandling = ()=>{

    // use simple function
    // function handleButtonClick(){
    //     alert("Hii, My nam is Rishi I am onclick event");
    // }

    //use Arrow function
    // const handleButtonClick =()=>{
    //     alert("Hii, My nam is Rishi I am onClick")
    // }

    //check event 
    // 1. SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}
    const handleButtonClick =(event)=>{
        console.log(event);
        // console.log(event.target);
        // console.log(event.type);
        alert("Hii, My nam is Rishi I am onClick")
    }

    const handleWelcomeUser =(user)=>{
        console.log(`Hey My name is ${user} singh`)
        // console.log(`Hey My name is ${user} singh`)
    }
    return(
        <>
        {/* // ?  Function Components with Named Functions -  */
      /* Remember how we haven't called this function, if you call this function here  then it will run without even clicking. You just need to pass reference and not call here. */}
        <button onClick={handleButtonClick}>Click Me</button>
        <br/><br/>
         {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function. This is because the arrow function creates a new function and calls your handler without passing any arguments. */}
        <button onClick={(event)=>handleButtonClick(event)}>click me 2</button>
        <br/><br/>

        {/* /* //? Inline Event Handlers} */}
        <button onClick={(event)=>console.log(event)}>Inline function</button>
        <br/><br/>

        {/* //? Function Components with Inline Arrow Functions */}
        <button onClick={()=>alert('Hey My name is inline event function')}>Inline Arrow Function</button>
        <br/><br/>

         {/* {/* //? Passing Arguments to Event Handlers } */}
      {/* <button onClick={handleWelcomeUser("rishi")}>click Me</button> */}
      <button onClick={()=>handleWelcomeUser("Rishi")}>click Me Ar</button>
      <button onClick={()=>handleWelcomeUser("Garima")}>click Me Ar</button>


        </>
    );
};