import { TaskItem } from "./TaskItem";
import { Task } from "@/types";

type TaskListProps = {
  tasks: Task[];
  onDelete:(id: string)=> void;
};

export const TaskList = ({ tasks, onDelete }: TaskListProps) => {
  return (
    <ul className="divide-y divide-[#edf1ee] px-3 py-2 sm:px-5">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete}/>
      ))}
    </ul>
  );
};
