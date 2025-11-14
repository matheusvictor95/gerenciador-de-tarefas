import { ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";

function Tasks({tasks, onTaskclick, onDeleteTaskClick}) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button onClick={() => onTaskclick(task.id)} className={`bg-slate-400 w-full text-white p-2 rounded-b-md {$task.isCompleted && "line-through"}`}>
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 roundend-b-md text-white">
            <ChevronRightIcon />
          </button>
           <button onClick={() => onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 roundend-b-md text-white">
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
