import React from "react";
import Task from "./Task";
const ListOfTask = ({ task }) => {
  return (
    <ul className="flex flex-col gap-4 border border-red-400bg-gray-900 p-4 rounded-xl">
      {task.map((task_name,idx) => <Task task_name={task_name} key={idx}/>)}
    </ul>
  );
};

export default ListOfTask;
