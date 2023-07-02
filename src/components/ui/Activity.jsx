"use client";

import Tasks from "./Tasks";
import { useEffect, useState } from "react";
import { LuPlusCircle } from "react-icons/lu";
import AddTaskForm from "./AddTaskFrom";

export default function Activity() {
  const [tasks, setTasks] = useState(taskslist);

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

  const updateTask = (id, value) => {
    setTasks[
      tasks.map((task) => {
        if (task.id === id) return [...tasks, { ...task, title: value }];
        return task;
      })
    ];
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="activity space-y-4">
      <AddTaskForm addTask={addTask} updateTask={updateTask} />
      <div className="tasks">
        <Tasks
          tasks={tasks}
          handleToggle={handleToggle}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
}

const taskslist = [
  { id: 1, title: "Take Bruno to walk", time: "12:23", completed: true },
  { id: 2, title: "Water to plants", time: "1:0", completed: false },
  { id: 3, title: "Wash dishes", time: "2:20", completed: false },
];
