// import { useEffect, useState } from "react";
// import { IoMdCheckmarkCircle } from "react-icons/io";
// import { MdDeleteForever } from "react-icons/md";
// import { Clock } from "./Clock"; // Importing the Clock component

// import "./Todo.css";
// export const Todo = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [task, setTask] = useState([]);
//   const [dateTime, setDateTime] = useState(""); 
//   const [inputDelete , setInputDelete] = useState("");
  
  
  
//   const handleInputChange = (value) => {
//     setInputValue(value);
//   };

//   // This function is called when the form is submitted
//   const handleFormSubmit = (event) => {
//     event.preventDefault(event);

//     // Prevent form submission if input is empty
//     // This is to avoid adding empty tasks
//     if (!inputValue) return;

//     // Check if the task already exists
//     if (task.includes(inputValue)) {
//       setInputValue("");
//       return;
//     }

//     // Add the new task to the list
//     // Using the previous state to ensure we are not overwriting the current state
//     setTask((prevTask) => [...prevTask, inputValue]);
//     // setTask((prev) => console.log(prev));

//     // Clear the input field after adding the task
//     // This is to reset the input field after adding a task
//     setInputValue("");
//   };



// // Using useEffect to update the date and time every second
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       const now = new Date();
// //       const formattedDate = now.toLocaleDateString();

// //       const formattedTime = now.toLocaleTimeString([], {
// //         hour: "2-digit",
// //         minute: "2-digit",
// //         second: "2-digit",
// //         hour12: true, // This ensures AM/PM is shown
// //       });

// //       setDateTime(`${formattedDate} - ${formattedTime}`);
// //     }, 1000);

// //     return () => clearInterval(interval); // Cleanup the interval on component unmount
// //   }, []);


//   // Function to delete a task
//   const deleteTask = (value) => {
//     // Filter out the task that matches the value to be deleted
//     const updatedTasks = task.filter((curTask) => curTask !== value);
    
//     // Update the task state with the filtered tasks
//     setTask(updatedTasks);
    
//     // Clear the input field after deleting a task
//     setInputValue("");
    
//   };

//   return (
//     // Using a section tag to wrap the todo list
//     <section className="todo-container">
//       <header>
//         <h1>Todo List</h1>
//         <h3 className="date-time">
//           {/* {formattedDate} - {formattedTime} */}
//          {/* {dateTime} */}
//          <Clock />
//         </h3>
//       </header>

//       {/* Form section for adding new tasks */}
//       <section className="form">
//         <form onSubmit={handleFormSubmit}>
//           <div>
//             <input
//               type="text"
//               className="todo-input"
//               autoComplete="off"
//               value={inputValue}
//               // first function is used to prevent the default form submission behavior
//               onChange={(event) => handleInputChange(event.target.value)}
//             />
//           </div>
//           <div>
//             <button type="submit" className="todo-btn">
//               {" "}
//               Add task
//             </button>
//           </div>
//         </form>
//       </section>

//       {/* Section to display the list of tasks */}
//       <section className="myUnOrdList">
//         <ul>
//           {task.map((curTask, index) => {
//             return (
//               <li key={index} className="todo-item">
//                 <span>{curTask}</span>
//                 <button className="check-btn">
//                   <IoMdCheckmarkCircle />
//                 </button>
//                 <button 
//                 className="delete-btn"
//                 value = {inputDelete}
//                 onClick={() => deleteTask(curTask)}
                
//                 >
//                   <MdDeleteForever />
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </section>
//     </section>
//   );
// };
