import { ListTodo, Plus, CornerDownLeft , Check  } from "lucide-react";

const HomePage = () => {
  return (
    <div className="w-[672px] h-[520px] bg-white rounded-3xl">
      <header className="flex items-center gap-3 px-6 pb-6 pt-7 sm:px-8 sm:pt-8">
        <div className="size-11 bg-[#E5F2ED] rounded-2xl flex items-center justify-center text-[#23735A]">
          <ListTodo />
        </div>
        <h1 className="text-2xl font-bold text-[#23735A]">My tasks.</h1>
      </header>

      <div className="mx-6 sm:mx-8">
        <div className="flex items-center gap-2 rounded-2xl border border-[#dce9e2] bg-[#f4f8f5] p-2">
          <input placeholder="What needs to get done?" className="flex-1 bg-transparent px-3 text-base text-[#63796C] placeholder:text-[#75867E] outline-none" />
          <button type="button" className="flex h-12 items-center gap-2 rounded-xl bg-[#D8E5DD] px-4 font-semibold text-[#63796C] whitespace-nowrap">
            <Plus className="size-4" />
            Add task
          </button>
        </div>
        <div className="mx-7 mb-7 mt-3 flex items-center justify-end gap-1.5 text-[11px] text-[#7a8881] sm:mx-9">
          <div className="">
            <CornerDownLeft />
          </div>
          <div className=" font-regular ">Enter to add a task</div>
        </div>
      </div>
      <div className="flex px-8 space-between   ">
        <div className="flex gap-5 sm:gap-7 font-semibold ">
          <button className="text-[#236B53]">All</button>
          <button className="text-[#7B8680]">Active</button>
          <button className="text-[#7B8680]">Completed</button>
        </div>
        <span className="rounded-md bg-[#f0f4f1] px-2 py-1 text-[11px] ml-auto font-medium flex justify-end text-[#65766c]">0</span>
      </div>
      <div className="flex items-center justify-between pt-3 gap-2 border-b border-[#e9eeeb] px-6 sm:px-8"></div>
      <div className="flex min-h-60 flex-col items-center justify-center px-6 py-10 text-center">
        <div className="size-[56px] mb-4 bg-[#F0F6F2] flex justify-center items-center text-[#6C9B82] rounded-full "><Check /></div>
        <div className="text-[#304C3E] text-base font-semibold  ">Your list starts here</div>
        <div className="text-[#7A8881] font-regular mt-2 text-sm ">Add your first task above.</div>
      </div>
    </div>
  );
};

export default HomePage;
