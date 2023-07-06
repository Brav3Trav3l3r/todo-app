"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { produce } from "immer";
import { useRouter } from "next/navigation";
import React from "react";
import Drawer from "@/components/ui/Projects/Drawer";
import DrawerContent from "@/components/ui/Projects/DrawerContent";
import useStorage from "../../../../utils/useStorage";

export default function ProjectPage({ params }) {
  const router = useRouter();
  const [projects, setProjects] = useStorage("PROJECTS");
  const [project, setProject] = useState({});

  useEffect(() => {
    if (projects) {
      setProject(projects.find((e) => e.id === params.id));
    }
  }, [projects]);

  const handleToggle = useCallback((value, id) => {
    setProjects(
      produce((draft) => {
        console.log(draft);
        const task = draft
          .find((p) => p.id === params.id)
          .tasks.find((t) => t.id === id);
        if (task) {
          task.completed = value;
        }
      })
    );
  }, []);

  const handleChildToggle = useCallback((value, id, pid) => {
    setProjects(
      produce((draft) => {
        const chtask = draft
          .find((p) => p.id === params.id)
          .tasks.find((p) => p.id === pid)
          .childTasks.find((ch) => ch.id === id);

        chtask.completed = value;
      })
    );
  }, []);

  const addChildTask = useCallback((title, pid) => {
    console.log(title, pid);
    setProjects(
      produce((draft) => {
        const task = draft
          .find((p) => p.id === params.id)
          .tasks.find((p) => p.id === pid);

        task.childTasks.push({
          id: crypto.randomUUID(),
          title: title,
          completed: false,
        });
      })
    );
  }, []);

  const deleteChildTask = useCallback((id, tid) => {
    setProjects(
      produce((draft) => {
        const proTasks = draft
          .find((p) => p.id === params.id)
          .tasks.find((p) => p.id === tid);

        const newChild = proTasks.childTasks.filter((ch) => ch.id != id);
        proTasks.childTasks = newChild;
      })
    );
  }, []);

  const updateProject = useCallback((data) => {
    console.log(data);
    setProjects(
      produce((draft) => {
        const project = draft.find((p) => p.id === params.id);
        project.title = data.title;
        project.description = data.description;
      })
    );
  }, []);

  const addTask = useCallback((value) => {
    setProjects(
      produce((draft) => {
        const project = draft.find((p) => p.id === params.id);
        project.tasks.push({
          id: crypto.randomUUID(),
          title: value,
          time: Math.floor(new Date().getTime() / 1000.0),
          completed: false,
          childTasks: [],
        });
      })
    );
  }, []);

  const deleteTask = useCallback((id) => {
    console.log(id);
    setProjects(
      produce((draft) => {
        const pro = draft.find((p) => p.id === params.id);
        const newTasks = pro.tasks.filter((task) => task.id != id);
        pro.tasks = newTasks;
      })
    );
  }, []);

  const deleteProject = () => {
    setProjects(
      projects.filter((p) => {
        p.id != params.id;
      })
    );
    router.replace("/");
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <DrawerContent
        project={project}
        handleChildToggle={handleChildToggle}
        addChildTask={addChildTask}
        handleToggle={handleToggle}
        addTask={addTask}
        deleteTask={deleteTask}
        deleteChildTask={deleteChildTask}
      />
      <Drawer
        project={project}
        updateProject={updateProject}
        deleteProject={deleteProject}
      />
    </div>
  );
}
