import { ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "./Button";

function Tasks({tasks, onTaskclick, onDeleteTaskClick}) {

    const navigate = useNavigate()

  function onSeeDetailsClick(task){
    const query = new URLSearchParams()
    query.set("title", task.title);
    query.set("description", task.description)
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button onClick={() => onTaskclick(task.id)} className={`bg-slate-400 w-full text-white p-2 rounded-b-md {$task.isCompleted && "line-through"}`}>
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
           <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
