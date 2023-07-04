"use client";

import Tasks from "./Tasks";
import AddTaskForm from "./AddTaskFrom";
import Modal from "./Modal";

export default function Activity({tasks, addTask, handleToggle, deleteTask}) {
  
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
