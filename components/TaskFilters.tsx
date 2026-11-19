import { FilterType , Task} from "@/types";

const filters: FilterType[] = ["All", "Active", "Completed"];

type TaskFiltersProps = {
  tasks: Task[];
  filter: FilterType;
  onFilter:(filter : FilterType )=> void;
};

export const TaskFilters = ( { filter, onFilter, tasks } : TaskFiltersProps) => {
  const handleClick = (filterValue: FilterType) => () => {
    onFilter(filterValue);
  };
  return (
    <div className="flex items-center justify-between pt-3 gap-2 border-b border-[#e9eeeb] px-6 sm:px-8  ">
      <div className="flex gap-5 sm:gap-7 font-semibold ">
        {filters.map((item: FilterType) => (
          <button 
          id={item} 
          key={item} 
          onClick={handleClick(item)}
          className={`cursor-pointer relative h-12 text-xs font-semibold transition sm:text-sm
            text-[#7b8680] hover:text-[#236b53]
            border-b-2 ${
              filter === item
                ? "border-b-[#236b53] text-[#236b53]"
                : "border-b-transparent"
            }`}>
            {item}
          </button>
        ))}
      </div>
      <span className="rounded-md bg-[#f0f4f1] px-2 py-1 text-[11px] ml-auto font-medium flex justify-end text-[#65766c]">{tasks.length}</span>
    </div>
  );
};
