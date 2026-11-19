export type Task = {
    id: string;
    title:string;
    completed : boolean;
};

export type FilterType = "All" | "Active" | "Completed";