import { TaskItem } from "./TaskItem";
import { Task } from "@/types";
import {TaskEmptyState} from "./TaskEmptyState"

type TaskListProps = {
  tasks: Task[];
  hasTasks: boolean
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export const TaskList = ({ tasks, onDelete, onToggle , hasTasks }: TaskListProps) => {
  if ( ! tasks.length) return <TaskEmptyState hasTasks={hasTasks} />;


  return (
    <ul className="divide-y divide-[#edf1ee]  py-2 ">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </ul>
  );
};
