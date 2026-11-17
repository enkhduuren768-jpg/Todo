import { CornerDownLeft } from "lucide-react";

export const TaskItem = () => {
  return (
    <p className="mx-6 mb-7 mt-3 flex items-center justify-end gap-1.5 text-[11px] text-[#7a8881] sm:mx-8">
      <div className="size-11px">
        <CornerDownLeft />
      </div>
      <div className=" font-regular ">Enter to add a task</div>
    </p>
  );
};
