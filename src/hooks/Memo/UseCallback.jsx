import { useState, useCallback } from "react";

const Button = ({ onClick, children }) => {
    console.log(`Rendering button: ${children}`);
    return <button onClick={onClick}>{children}</button>;
};

export default function UseCallback() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("increment inside");
        setCount((prevCount) => prevCount + 1);
    }, []);

    const decrement = useCallback(() => {
        console.log("decrement inside");
        setCount((prevCount) => prevCount - 1);
    }, []);

    return (
        <div className="p-4 h-lvh flex flex-col justify-center items-center bg-black text-white">
            <h1 className="mb-4">Count: {count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
}