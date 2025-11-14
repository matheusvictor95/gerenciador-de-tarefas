import { useState } from "react";

function AddTask({onAddTaskSubmit}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input type="text" placeholder="Digite o título da tarefa"  className="border border-slate-950 outline-slate-400 px-4 py-2 rounded-md text-red-500" value={title} onChange={(event) => setTitle(event.target.value)}/>
      <input type="text" placeholder="Digite a descrição da tarefa" className="border border-slate-950 outline-slate-400 px-4 py-2 rounded-md text-red-500" value={description}  onChange={(event) => setDescription(event.target.value)}/>
      <button className="bg-slate-500 text-white px-4 py-2 roundend-md font-medium" onClick={() => 
        {
          if(!title.trim() || !description.trim()){
            return alert("Preencha o título e a descrição da tarefa")
          }
          onAddTaskSubmit(title,description); setTitle("");setDescription("");}}>Adicionar</button>
    </div>
  );
}

export default AddTask;
