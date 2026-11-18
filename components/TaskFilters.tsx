
export const TaskFilters = () => {
  return (
    <div className="flex px-8 space-between   ">
      <div className="flex gap-5 sm:gap-7 font-semibold ">
        <button className="text-[#236B53]">All</button>
        <button className="text-[#7B8680]">Active</button>
        <button className="text-[#7B8680]">Completed</button>
      </div>
      <span className="rounded-md bg-[#f0f4f1] px-2 py-1 text-[11px] ml-auto font-medium flex justify-end text-[#65766c]">0</span>
    </div>
  );
};
