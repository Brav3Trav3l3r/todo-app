"use client";

import Activity from "@/components/ui/Activity";
import Projects from "@/components/ui/Projects";
import Stats from "@/components/ui/Stats";
import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState(() => {
    if (typeof window !== "undefined") {
      console.log("You are on the browser");
      const localtasks = localStorage.getItem("TASKS");
      if (localtasks) {
        console.log("local");
        return JSON.parse(localtasks);
      }
      return [];
    } else {
      console.log("You are on the server");
      // 👉️ can't use localStorage
    }
  });

  useEffect(() => {
    console.log("effect22");
    localStorage.setItem("TASKS", JSON.stringify(tasks));
  }, [tasks]);

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
    <main className="py-6 xl:px-20 px-4 lg:px-8 space-y-4">
      <div className="dashbord">
        <h1 className="text-sm opacity-40 font-semibold">Dashboard</h1>
      </div>

      <div className="dashboard flex flex-col md:flex-row gap-8">
        <div className="group-two md:w-2/3 space-y-8">
          <Projects />
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
    </main>
  );
}
