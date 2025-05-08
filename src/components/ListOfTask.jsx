import React, { useState } from "react";
import Task from "./Task";
const ListOfTask = ({ task , settask }) => {
  if(task.length==0) return null

  const [isCheck,setisCheck]=useState(false);
  const handleCheckClick = (task_id) => {
    const updatedList=task.map((currTask)=>{
      if(currTask.id==task_id){
        return {...currTask,Check:!(currTask.Check)}
      } else{
        return currTask
      }
    })     
    settask(updatedList);
 };

  const handleDeleteClick = (task_id) => {
    const updatedList=task.filter((task)=>{
      return task.id != task_id
    })
    settask(updatedList);
  };

  return (
    <ul className="flex flex-col gap-4 border border-red-400bg-gray-900 p-4 rounded-xl">
      {task.map((currTask) => (
        <Task
          task_name={currTask.content}
          key={currTask.id}
          handleCheckClick={()=>handleCheckClick(currTask.id)}
          handleDeleteClick={()=>{handleDeleteClick(currTask.id)}}
          Check={currTask.Check}
        />
      ))}
    </ul>
  );
};

export default ListOfTask;
