import { useNavigate, useSearchParams } from "react-router";
import { ChevronLeftIcon, DeleteIcon, TrashIcon } from "lucide-react";
import Button from "../components/Button";
import Title from "../components/Title";

function TaskPage() {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <Button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
            <ChevronLeftIcon />
          </Button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
