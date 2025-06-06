import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const Delete = ({key , data, onDeleteTask}) => {
  return (
    <li key={key} className="todo-item">
      <span>{data}</span>
      <button className="check-btn">
        <IoMdCheckmarkCircle />
      </button>
      <button className="delete-btn" onClick={() => onDeleteTask(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

// export const Delete = ({ task, onDeleteTask }) => (
//   <li className="todo-item">
//     <span>{task}</span>
//     <button className="check-btn">
//       <IoMdCheckmarkCircle />
//     </button>
//     <button className="delete-btn" onClick={() => onDeleteTask(task)}>
//       <MdDeleteForever />
//     </button>
//   </li>
// );
