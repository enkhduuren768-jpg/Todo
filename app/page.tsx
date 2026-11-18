"use client";

import { TaskList, TaskFilters, TaskForm, TaskItem, TaskHeader } from "@/components";
import { useState } from "react";
import { Task } from "@/types";

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const createTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks((current) => [newTask, ...current]);
  };

  const deleteTask = (id: string) => {
    setTasks((current) => current.filter((task) => task.id !== id))
   
  };

  return (
    <div className="w-[672px] min-h-[520px] bg-white rounded-3xl">
      <TaskHeader />

      <div className="mx-6 sm:mx-8">
        <TaskForm onCreateTask={createTask} />
      </div>

      <TaskFilters />

      <div className="flex items-center justify-between pt-3 gap-2 border-b border-[#e9eeeb] px-6 sm:px-8"></div>

      <TaskList tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
};

export default HomePage;
