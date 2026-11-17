import { Plus } from "lucide-react";
import { ChangeEvent, useState,SubmitEvent } from "react";

type TaskFormProps = {
  onCreateTask: (title: string) => void;
};

export const TaskForm = ({ onCreateTask }: TaskFormProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleSumbit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    onCreateTask(taskTitle);
    setTaskTitle("")
  };

  return (
    <form onSubmit={handleSumbit} className="flex mx-6 items-center gap-2 rounded-2xl  sm:mx-8 border border-[#dce9e2] bg-[#f4f8f5] p-2">
      <label htmlFor="new-task" className="sr-only">
        Task name
      </label>
      <input
        id="new-task"
        placeholder="What needs to get done?"
        required
        maxLength={160}
        value={taskTitle}
        onChange={handleChange}
        className="flex-1 bg-transparent px-3 text-base text-[#63796C] placeholder:text-[#75867E] outline-none"
      />
      <button type="submit" className="flex h-12 items-center gap-2 rounded-xl bg-[#D8E5DD] px-4 font-semibold text-[#63796C] whitespace-nowrap">
        <Plus className="h-4 w-4" />
        Add <span className="hidden sm:inline">task</span>
      </button>
    </form>
  );
};
