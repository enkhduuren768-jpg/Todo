import { Plus } from "lucide-react";
import { ChangeEvent, useState, SubmitEvent } from "react";
import { CornerDownLeft } from "lucide-react";

type TaskFormProps = {
  onCreateTask: (title: string) => void;
};

export const TaskForm = ({ onCreateTask }: TaskFormProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleSumbit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreateTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <div>
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
          className="h-12 flex-1 rounded-xl bg-transparent px-3 text-base text-[#63796C] placeholder:text-[#75867E] outline-none transition hover:bg-white focus:bg-white"
        />
        <button
          type="submit"
          className={`flex h-12 cursor-pointer items-center gap-2 rounded-xl px-4 font-semibold whitespace-nowrap transition-all duration-300 ease-out ${
            taskTitle.trim() ? "scale-105 bg-[#386b55] text-white hover:scale-110 hover:bg-[#2e5845]" : "bg-[#D8E5DD] text-[#63796C] hover:bg-[#cbdcd1]"
          }`}
        >
          <Plus className="h-4 w-4" />
          Add <span className="hidden sm:inline">task</span>
        </button>
      </form>
      <div className="mx-6 mb-7 mt-3 flex items-center justify-end gap-1.5 text-[11px] text-[#7a8881] sm:mx-8">
        <div>
          <CornerDownLeft size={11} />
        </div>
        <div className="font-regular">Enter to add a task</div>
      </div>
    </div>
  );
};
