import { Task } from "@/types";
import { Trash2, Check } from "lucide-react";

type TaskItemProps = {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export const TaskItem = ({ task, onDelete, onToggle }: TaskItemProps) => {
  const handDelete = () => {
    onDelete(task.id);
  };
  const handleToggle = () => {
    onToggle(task.id);
  };

  return (
    <div className="group flex items-center gap-4 px-4">
      <button
        onClick={handleToggle}
        className={`flex size-5.5 shrink-0 cursor-pointer items-center justify-center rounded-full border transition ${
          task.completed ? "border-[#4a7c65] bg-[#4a7c65] text-white" : "border-[#bdcdc2] bg-white group-hover:border-[#63947b]"
        }`}
      >
        {task.completed && <Check className="h-3.5 w-3.5" />}
      </button>

      <p className={`min-w-0 flex-1 py-3 text-sm ${task.completed ? "text-[#93a198] line-through" : "text-[#30483c]"}`}>{task.title}</p>

      <button onClick={handDelete} className="flex h-4 w-4 shrink-0 items-center justify-center rounded-xl text-[#93a198] transition hover:bg-[#fbece7] hover:text-[#bb6250]">
        <Trash2 />
      </button>
    </div>
  );
};
