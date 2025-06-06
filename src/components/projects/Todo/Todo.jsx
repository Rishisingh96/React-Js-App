import { useState } from "react";
import { Clock } from "./Clock"; // Clock Component
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { Delete } from "./Delete";

export const Todo = () => {
  const [task, setTask] = useState([]);

  // this function is called when the form is submitted
  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) return;
    setTask((prevTask) => [...prevTask, inputValue]);
  };


  const deleteTask = (value) => {
    const updatedTasks = task.filter((curTask) => curTask !== value);
    setTask(updatedTasks);
  };

  const handleClearTodoData = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h3 className="date-time">
          <Clock />
        </h3>
      </header>

      {/* Form section for adding new tasks */}
      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => (
           <Delete 
           key={index} 
           data={curTask} 
           onDeleteTask={deleteTask} />
          ))}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
      </section>
    </section>
  );
};
