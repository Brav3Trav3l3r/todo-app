"use client";

import { LuX } from "react-icons/lu";
import { useState } from "react";

export default function Drawer({ project, updateProject, deleteProject }) {
  const [data, setData] = useState({
    title: project?.title,
    description: project?.description,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.text != "" && data.description != "") {
      updateProject(data);
      <div className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Your purchase has been confirmed!</span>
      </div>;
    }
  };

  return (
    <div className="drawer-side ">
      <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
      <div className="bg-base-200 w-1/3 h-full p-4 space-y-6">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-sm btn-error"
        >
          <LuX />
          Close
        </label>

        <form onSubmit={handleSubmit} className="main space-y-6 w-fullh-full">
          <div className="title flex flex-col gap-2">
            <label htmlFor="title" className="opacity-80 text-sm">
              Title:
            </label>
            <input
              type="text"
              id="title"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={data?.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>

          <div className="description flex flex-col gap-2">
            <label htmlFor="desc" className="opacity-80 text-sm">
              Description:
            </label>
            <textarea
              id="desc"
              className="textarea textarea-bordered h-48"
              placeholder="Bio"
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="buttons flex w-full gap-3">
            <button className="btn btn-warning flex-1">Update</button>
          </div>
        </form>

        <button onClick={deleteProject} className="btn btn-error flex-1">Delete</button>
      </div>
    </div>
  );
}
