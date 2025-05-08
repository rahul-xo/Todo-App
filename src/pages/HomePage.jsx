import React, { useState } from "react";
import ListOfTask from "../components/ListOfTask";
import DateAndTime from "../components/DateAndTime";
import ToDoLocalStorge from "../components/ToDoLocalStorge";
const HomePage = () => {
  const [inputvalue, setvalue] = useState("");
  const name="todoList";
  const [task, settask] = useState(()=>{
    const savedTask=JSON.parse(localStorage.getItem(name));
    return savedTask ? savedTask : []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputvalue == "" || task.includes(inputvalue)) {
      alert("Invalid or already exist !");
      setvalue("");
      return;
    } else {
      settask(prev => [...prev,{id:inputvalue,content:inputvalue,Check:false}]);
      setvalue("");
    }
    
  };
  
  return (
    <div className="flex h-screen justify-center items py-24 border-2 border-gray-400">
      <ToDoLocalStorge task={task} name={name}/>
      <div className="text-white flex flex-col gap-6">
        <h1 className="font-bold text-5xl text-center">Todo List</h1>
        <DateAndTime/>
        <form action="" onSubmit={handleSubmit}>
          <input
            className="border-none bg-white text-black outline-none rounded-l-lg p-2"
            type="text"
            placeholder="enter your task"
            value={inputvalue}
            onChange={(e) => setvalue(e.target.value)}
          />
          <button className="bg-blue-800 p-2 rounded-r-lg font-semibold cursor-pointer">
            Add task
          </button>
        </form>
        <ListOfTask task={task} settask={settask}/>
        <button className="bg-red-800 rounded-2xl py-2 font-semibold cursor-pointer" onClick={()=>settask([])}>Delete all</button>
      </div>
    </div>
  );
};

export default HomePage;
