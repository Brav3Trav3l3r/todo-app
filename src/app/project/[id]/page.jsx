"use client";
import { useState, useEffect, useCallback } from "react";
import { useImmer } from "use-immer";
import { LuMoreHorizontal, LuCalendarDays } from "react-icons/lu";
import { Disclosure } from "@headlessui/react";

export default function App({ params }) {
  const [project, setProject] = useImmer(() => {
    console.log("state");
    const localtasks = localStorage.getItem("PROJECT");
    if (localtasks) {
      return JSON.parse(localtasks);
    }
    return [];
  });

  useEffect(() => {
    console.log("effect");

    localStorage.setItem("PROJECT", JSON.stringify(projectDetail));
  }, [project]);

  // const handleToggle = useCallback((value, id) => {
  //   setProject((draft) => {
  //     const task = draft.tasks.find((e) => (e.id = id));
  //     if (task) {
  //       return (task.completed = value);
  //     }
  //     return task;
  //   });
  // }, []);

  // const handleChildToggle = useCallback((value, id) => {
  //   setProject((draft) => {
  //     const task = draft.tasks.childTasks?.find((t) => (t.id = id));
  //     if (task) {
  //       return (task.completed = value);
  //     }
  //     return task;
  //   });
  // }, []);

  return (
    <div className="py-6 xl:px-20 px-4 lg:px-8 space-y-8">
      <div className="headings space-y-4">
        <h1 className="text-3xl font-bold">{project.title}</h1>

        <p className="max-w-prose opacity-90">{project.description}</p>

        <div className="calender flex items-center gap-1 opacity-70">
          <LuCalendarDays />
          <h1 className="text-sm ">{project.createdAt}</h1>
        </div>
      </div>

      {/* task */}
      <div className="tasks max-w-3xl space-y-4">
        <h1 className="font-bold text-lg md:text-xl">Tasks</h1>
        <div className="tasklist space-y-4">
          {project.tasks?.map((t) => (
            <Disclosure as="div" key={t.id} className="w-full space-y-2">
              {/* Disclosure Button */}
              <Disclosure.Button className="task flex gap-6 w-full p-3 bg-purple-100 rounded-lg">
                <input
                  type="checkbox"
                  checked={t.completed}
                  className="checkbox"
                  onChange={(e) => handleToggle(e.target.checked, t.id)}
                />
                <h1>{t.title}</h1>
              </Disclosure.Button>

              {/* Disclosure */}
              <Disclosure.Panel className="space-y-2">
                {t.childTasks?.map((ct) => (
                  <div
                    key={ct.id}
                    className="ct flex gap-6 rounded-lg p-3 ml-8 bg-accent"
                  >
                    <input
                      type="checkbox"
                      checked={ct.completed}
                      className="checkbox"
                      onChange={(e) =>
                        handleChildToggle(e.target.checked, ct.id)
                      }
                    />
                    <h1>{ct.title}</h1>
                  </div>
                ))}
              </Disclosure.Panel>
            </Disclosure>
          ))}
        </div>
      </div>
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
          completed: false,
        },
        {
          id: 2,
          title: "Get designs",
          completed: false,
        },
      ],
    },
    { id: 2, title: "design frontend", completed: false, childTasks: [] },
    { id: 3, title: "implement auth", completed: false, childTasks: [] },
    { id: 4, title: "deploy", completed: false, childTasks: [] },
  ],
  createdAt: "June 23",
};
