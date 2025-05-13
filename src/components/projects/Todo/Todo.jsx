import { useState } from "react";
import "./Todo.css";
export const Todo = () =>{
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);


    const handleInputChange = (value) =>{
        setInputValue(value);
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault(event);

        if(!inputValue) return;    

        if(task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);
        // setTask((prev) => console.log(prev));

        setInputValue("");
    };

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>

            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" 
                        autoComplete="off"
                        value={inputValue}
                        onChange={(event) => handleInputChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn"> Add task</button>
                    </div>
                </form>
            </section>

            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask, index) =>{
                        return(
                            <li key={index}>
                                <span>{curTask}</span>
                                <button>
                                </button>
                                <button>    
                                </button>
                        </li>
                        )
                    })}
                </ul>
            </section>
        </section>
    );
}