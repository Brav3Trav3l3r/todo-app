"use client";

import Activity from "@/components/ui/Activity";
import Projects from "@/components/ui/Projects";
import Stats from "@/components/ui/Stats";
import { useState, useEffect, useCallback } from "react";
import useStorage from "../../../../utils/useStorage";

export default function Dashboard() {
  const [tasks, setTasks] = useStorage("TASKS");
  const [projects, setProjects] = useStorage("PROJECTS");

  const addProject = (title, desc) => {
    setProjects([
      ...projects,
      {
        id: crypto.randomUUID(),
        title: title,
        description: desc,
        tasks: [],
        completed: false,
        progress: 0,
        createdAt: Math.floor(new Date().getTime() / 1000.0),
      },
    ]);
  };

  const handleToggle = async (value, id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: value };
        }
        return task;
      })
    );
  };

  const addTask = async (value) => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: value,
        time: Math.floor(new Date().getTime() / 1000.0),
        completed: false,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <div className="dashboard flex flex-col md:flex-row gap-8">
      <div className="group-two md:w-2/3 space-y-8">
        <Projects projects={projects} addProject={addProject} />
        <Activity
          tasks={tasks}
          handleToggle={handleToggle}
          deleteTask={deleteTask}
          addTask={addTask}
        />
      </div>
      <div className="group-one md:w-1/3 ">
        <Stats tasks={tasks} />
      </div>
    </div>
  );
}
