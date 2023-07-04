"use client";
import { useState, useEffect, useCallback } from "react";
import { produce } from "immer";
import Details from "@/components/ui/Projects/Detail";
import Tasks from "@/components/ui/Projects/ProjectTasks";
import Drawer from "@/components/ui/Projects/Drawer";

export default function App({ params }) {
  const [project, setProject] = useState(() => {
    if (typeof window !== "undefined") {
      console.log("You are on the browser");
      // 👉️ can use localStorage here
      const localtasks = localStorage.getItem("PROJECT");
      if (localtasks) {
        return JSON.parse(localtasks);
      }
      return projectDetail;
    } else {
      console.log("You are on the server");
      // 👉️ can't use localStorage
    }
  });

  useEffect(() => {
    console.log("effect");

    localStorage.setItem("PROJECT", JSON.stringify(project));
  }, [project]);

  const handleToggle = useCallback((value, id) => {
    setProject(
      produce((draft) => {
        console.log(draft);
        const task = draft.tasks.find((t) => t.id === id);
        if (task) {
          task.completed = value;
        }
      })
    );
  }, []);

  const handleChildToggle = useCallback((value, id, pid) => {
    setProject(
      produce((draft) => {
        console.log(draft);
        const chtask = draft.tasks
          .find((t) => t.id === pid)
          .childTasks.find((ch) => ch.id === id);
        chtask.completed = value;
      })
    );
  }, []);

  const addChildTask = useCallback((title, pid) => {
    console.log(title, pid);
    setProject(
      produce((draft) => {
        draft.tasks
          .find((p) => p.id === pid)
          .childTasks.push({
            id: crypto.randomUUID(),
            title: title,
            completed: false,
          });
      })
    );
  }, []);

  const updateProject = useCallback((data) => {
    console.log(data);
    setProject(
      produce((draft) => {
        draft.title = data.title;
        draft.description = data.description;
      })
    );
    alert("Updated sucessfully");
  }, []);

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="py-6 xl:px-20 px-4 lg:px-8 space-y-8">
          <Details project={project} />
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-sm btn-info"
          >
            Edit project
          </label>
          {/* task */}
          <Tasks
            project={project}
            handleChildToggle={handleChildToggle}
            handleToggle={handleToggle}
            addChildTask={addChildTask}
          />
        </div>
      </div>
      <Drawer project={project} updateProject={updateProject} />
    </div>
  );
}

const projectDetail = {
  id: 1,
  description:
    "TodoListApp is a user-friendly and efficient task management application designed to help individuals organize and prioritize their daily activities. With its intuitive interface and powerful features, this app is an essential tool for anyone seeking to streamline their productivity and stay on top of their responsibilities.",
  title: "Create a todo app.",
  tasks: [
    {
      id: 1,
      title: "create UI",
      completed: false,
      childTasks: [
        {
          id: 1,
          title: "Talk to designer",
          completed: true,
        },
        {
          id: 2,
          title: "Get designs",
          completed: false,
        },
      ],
    },
    { id: 2, title: "design frontend", completed: false, childTasks: [] },
    { id: 3, title: "implement auth", completed: true, childTasks: [] },
    { id: 4, title: "deploy", completed: false, childTasks: [] },
  ],
  createdAt: "June 23",
};

// const newState = produce(state, (draftState) => {
//   const taskToUpdate = draftState.tasks.find((task) => task.id === taskIdToUpdate);
//   if (taskToUpdate) {
//     const index = draftState.tasks.findIndex((task) => task.id === taskIdToUpdate);
//     draftState.tasks[index] = { ...taskToUpdate, title: newTitle };
//   }
// });
