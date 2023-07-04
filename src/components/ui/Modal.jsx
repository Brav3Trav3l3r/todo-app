"use client";

import { useEffect, useRef, useState } from "react";

export default function Modal({ addTask, b }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    if (inputValue !== "") {
      addTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <dialog id="my_modal_13" className="modal">
      <form onSubmit={handleSubmit} method="dialog" className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <h3 className="font-bold text-lg">Add new task</h3>

        <div className="content my-4">
          <input
            id="title"
            type="text"
            placeholder="Title"
            className="input input-bordered w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="btns flex justify-end">
          <button className="btn btn-primary ">Add</button>
        </div>
      </form>
    </dialog>
  );
}
