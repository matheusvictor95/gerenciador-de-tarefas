import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description:
        "Estudar programação para se tornar um desenvolvedor full stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description:
        "Estudar inglês para me tornar fluente",
      isCompleted: false,
    },
    {
       id: 3,
    title: "Estudar matemática",
    description: "Estudar matemática para se tornar um desenvolvedor full stack",
    isCompleted: false
    },
  ]);

  function onTaskclick(taskId){
    const newTasks = tasks.map(task => {
      if(task.id === taskId)
      {
        return { ...task, isCompleted: !task.isCompleted};
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-3.5">
        <h1 className="tect-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit = {onAddTaskSubmit}/>
        <Tasks tasks = {tasks} onTaskclick = {onTaskclick} onDeleteTaskClick = {onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;
