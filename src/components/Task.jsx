import React from "react";
import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";
const Task = ({ task_name , handleDeleteClick , handleCheckClick , isCheck}) => {
  return (
    <li className={`flex justify-between ${isCheck ? "line-through" : "no-underline"} items-center text-white text-lg font-semibold`}>
      {task_name}
      <div className="flex gap-8">
        <CheckButton handleCheckClick={handleCheckClick}/>
        <DeleteButton handleDeleteClick={handleDeleteClick}/>
      </div>
    </li>
  );
};

export default Task;
