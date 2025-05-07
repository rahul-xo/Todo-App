import React from "react";
import Task from "./Task";
const ListOfTask = ({ task ,settask }) => {
  const handleCheckClick = (task_name) => {
  console.log(task_name);
    
  };

  const handleDeleteClick = (task_name) => {
    const updatedList=task.filter((val)=> val !== task_name);
    settask(updatedList);
  };

  return (
    <ul className="flex flex-col gap-4 border border-red-400bg-gray-900 p-4 rounded-xl">
      {task.map((task_name, idx) => (
        <Task
          task_name={task_name}
          key={idx}
          handleCheckClick={()=>handleCheckClick(task_name)}
          handleDeleteClick={()=>{handleDeleteClick(task_name)}}
        />
      ))}
    </ul>
  );
};

export default ListOfTask;
