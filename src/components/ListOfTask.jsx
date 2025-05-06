import React from "react";
import Task from "./Task";
const ListOfTask = ({ task }) => {
  return (
    <ol className="list-none flex gap-24 justify-between items-center  bg-gray-900 p-4 rounded-xl">
      {task.map((task_name,idx) => <Task task_name={task_name} key={idx}/>)}
    </ol>
  );
};

export default ListOfTask;
