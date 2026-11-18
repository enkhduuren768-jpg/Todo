import { Task } from "@/types";
import { Trash2 , Check } from "lucide-react";


type TaskItemProps = {
  task: Task;
  onDelete:(id: string)=> void;
};

export const TaskItem = ({ task, onDelete ,  }: TaskItemProps) => {
const handDelete = () => {
  onDelete(task.id)
};

  return (
    <div className=" group flex items-center gap-4 px-4">
      <button className="flex size-5.5 items-center justify-center rounded-full border transition border-[#bdcdc2] bg-white group-hover:border-[#63947b] ">
      <Check  className="text-[red] w-14 h-14  "/>

      </button>

      <p className="min-w-0 flex-1 py-3 text-sm  text-[#30483c]">{task.title}</p>

      <button onClick={handDelete} className=" flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-[#93a198] transition hover:bg-[#fbece7] hover:text-[#bb6250] ">
        <Trash2 />
      </button>
    </div>
  );
};
