import React from "react";
import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";
const Task = ({ task_name }) => {
  return (
    <li className="flex justify-between items-center text-white text-lg font-semibold border-2 border-black">
      {task_name}
      <div className="flex gap-8">
        <CheckButton />
        <DeleteButton />
      </div>
    </li>
  );
};

export default Task;
