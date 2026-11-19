"use client";

import { TaskList, TaskFilters, TaskForm,  TaskHeader } from "@/components";
import { useState } from "react";
import { Task, FilterType } from "@/types";



const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>("All");


  const createTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks((current) => [newTask, ...current]);
  };

  const deleteTask = (id: string) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };
  const toggleTask = (id: string) => {
    setTasks((current) => current.map((tasks) => (tasks.id === id ? { ...tasks, completed: !tasks.completed } : tasks)));
  };

const visibleTasks = tasks.filter((task)=> filter === "All" || filter === "Active" ? !task.completed : task.completed)

  return (
    <div className="w-2xl min-h-[520px] mt-50 bg-white rounded-3xl">
      <TaskHeader />

      <div className="mx-6 sm:mx-8">
        <TaskForm onCreateTask={createTask} />
      </div>

      <TaskFilters filter={filter} onFilter={setFilter} tasks={visibleTasks} />


      <TaskList tasks={visibleTasks} hasTasks={tasks.length>0} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
};

export default HomePage;
