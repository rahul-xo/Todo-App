import React from "react";
import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";
const Task = ({ task_name }) => {
  return (
    <>
      <li className="text-white text-lg font-semibold">{task_name}</li>
      <div className="flex justify-center items-center gap-8">
        <CheckButton/>
        <DeleteButton/>
      </div>
    </>
  );
};

export default Task;
