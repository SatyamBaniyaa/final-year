"use client"

import { use, useState } from "react";

interface taskType {
  id:number;
  name:string;
  isCompleted:boolean;
}

function ToDoList(){
  const [task, setTask ]= useState<taskType>({id:0, name:" ", isCompleted:false});
  const [ tasks, setTasks]= useState<taskType>({id:0, name:"", isCompleted:false});
  const [currentTask, setCurrentTask ]= useState("");
//   function handleInputChange(event:any){
//     setCurrentTask(event.target.value);

//   }

function addTask(){


}
function deleteTast(){

}


return(
  <div className="">
    <div className="">
      <h1 className="">
        TO-DO-LIST
      </h1>
      <div>
        <input
        type="text"
        placeholder="Enter A Task......."
        />
      </div>
    </div>
  </div>

);
}


export default ToDoList;

