import React from "react";
import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";
const Task = ({ task_name , handleDeleteClick , handleCheckClick , Check}) => {
  return (
    <li className={`flex justify-between ${Check ? "line-through text-gray-700" : "no-underline text-white"} items-center  text-lg font-semibold`}>
      {task_name}
      <div className="flex gap-8">
        <CheckButton handleCheckClick={handleCheckClick}/>
        <DeleteButton handleDeleteClick={handleDeleteClick}/>
      </div>
    </li>
  );
};

export default Task;
