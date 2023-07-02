"use client";

import Task from "./Task";

export default function Tasks({tasks, handleToggle, deleteTask, updateTask}) {
 
  return (
    <div className="">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Created at</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleToggle={handleToggle}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}


