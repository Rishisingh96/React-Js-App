import { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

import "./Todo.css";
export const Todo = () =>{
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);


    const handleInputChange = (value) =>{
        setInputValue(value);
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault(event);

        // Prevent form submission if input is empty
        // This is to avoid adding empty tasks
        if(!inputValue) return;    

        // Check if the task already exists
        if(task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        // Add the new task to the list
        // Using the previous state to ensure we are not overwriting the current state
        setTask((prevTask) => [...prevTask, inputValue]);
        // setTask((prev) => console.log(prev));

        // Clear the input field after adding the task
        // This is to reset the input field after adding a task
        setInputValue("");
    };

    return (
        // Using a section tag to wrap the todo list
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            
            {/* Form section for adding new tasks */}
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" 
                        autoComplete="off"
                        value={inputValue}
                        // first function is used to prevent the default form submission behavior
                        onChange={(event) => handleInputChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn"> Add task</button>
                    </div>
                </form>
            </section>

            {/* Section to display the list of tasks */}
            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask, index) =>{
                        return(
                            <li key={index} className="todo-item">  
                                <span>{curTask}</span>
                                <button className="check-btn">
                                    <IoMdCheckmarkCircle />
                                </button>
                                <button className="delete-btn">
                                    <MdDeleteForever />
                                </button>
                        </li>
                        )
                    })}
                </ul>
            </section>
        </section>
    );
};