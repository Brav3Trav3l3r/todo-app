"use client";

import Tasks from "./Tasks";
import { useEffect, useState } from "react";
import { LuPlusCircle } from "react-icons/lu";
import AddTaskForm from "./AddTaskFrom";
import Modal from "./Modal";

export default function Activity() {
  const [tasks, setTasks] = useState(() => {
    if (typeof window !== undefined) {
      const localtasks = localStorage.getItem("TASKS");
      if (localtasks) {
        return JSON.parse(localtasks);
      }
      return [];
    }
  });

  useEffect(() => {
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
        time: Date.now(),
        completed: false,
      },
    ]);
  };

  // const updateTask = (id, value) => {
  //   setTasks[
  //     tasks.map((task) => {
  //       if (task.id === id) return [...tasks, { ...task, title: value }];
  //       return task;
  //     })
  //   ];
  // };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <div className="activity space-y-4">
      <Modal key={"newModal"} addTask={addTask} />
      <AddTaskForm />
      <div className="tasks">
        <Tasks
          tasks={tasks}
          handleToggle={handleToggle}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
