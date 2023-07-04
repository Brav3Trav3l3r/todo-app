"use client";

import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { LuListTree } from "react-icons/lu";

export default function Task({
  t,
  handleChildToggle,
  handleToggle,
  addChildTask,
}) {
  const [open, setOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const handleOpen = () => {
    setOpen((open) => (open = !open));
  };

  const handleSubmit = (title, id, e) => {
    e.preventDefault();
    console.log(title, id);
    addChildTask(title, id);
    setInputVal("");
  };

  return (
    <Disclosure as="div" className="w-full space-y-2">
      {/* Disclosure Button */}
      <div className="task flex justify-between w-full p-3 bg-purple-100 rounded-lg">
        <div className="g1 flex gap-4">
          <input
            type="checkbox"
            checked={t.completed}
            className="checkbox"
            onChange={(e) => handleToggle(e.target.checked, t.id)}
          />
          <h1>{t.title}</h1>
        </div>
        <Disclosure.Button className="g2 btn btn-xs flex gap-2 btn-info items-center">
          <h1 className="font-bold">{t.childTasks.length}</h1>
          <LuListTree />
        </Disclosure.Button>
      </div>

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
              onChange={(e) => handleChildToggle(e.target.checked, ct.id, t.id)}
            />
            <h1>{ct.title}</h1>
          </div>
        ))}

        {open ? (
          <form
            onSubmit={(e) => handleSubmit(inputVal, t.id, e)}
            className="space-y-2"
          >
            <div className="add-task flex gap-6 rounded-lg ml-8">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
            </div>

            <div className="button w-full flex justify-end gap-3 ">
              {open && inputVal != "" && (
                <button className="btn btn-primary btn-sm">Add</button>
              )}
            </div>
          </form>
        ) : (
          ""
        )}

        <div className=" w-full flex justify-end">
          <button
            onClick={handleOpen}
            className={`${open ? "btn-error" : "btn-info"} btn btn-sm `}
          >
            {!open ? "Add new subtask" : "Cancel"}
          </button>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
