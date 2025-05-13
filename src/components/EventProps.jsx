import './EV.css'
export const EventProps =()=>{

    const HandleWelcomeRishi=(user)=>{
        alert(`Hey, ${user}`);
    }
    const handleHover=()=>{
        alert(`Hey Thanks for hovering me`);
    }
    return(
        <>
        <WelcomeRishi
            onClick={()=> HandleWelcomeRishi("rishi")}
            onMouseEnter={handleHover}
        />
        </>
    );
};

const WelcomeRishi =(props)=>{
    const {onClick ,onMouseEnter }=props;
    // const{onButtonClick, onMouseEvent} =props;
    const handleGreeting =()=>{
        alert("Welcome to App , Good morning")
        props.onClick();
    }
    return (
        <>
            <button onClick={onClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
            
        </>
    );
}