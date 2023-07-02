'use client'

import { useState } from "react";

export default function UpdateModal({ title, id, updateTask }) {
  const [newTitle, setNewTitle] = useState(title);

  const handleSubmit = () => {
    if (title !== "") {
      updateTask(id, newTitle);
    }
  };

  return (
    // <dialog id="update_modal" className="modal">
    //   <form onSubmit={handleSubmit} method="dialog" className="modal-box">
    //     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
    //       ✕
    //     </button>
    //     <h3 className="font-bold text-lg">Add new task</h3>

    //     <div className="content my-4">
    //       <input
    //         id="title"
    //         type="text"
    //         name="title"
    //         placeholder="Title"
    //         className="input input-bordered w-full"
    //         value={newTitle}
    //         onChange={(e) => setInputValue(e.target.value)}
    //       />
    //     </div>
    //     <div className="btns flex justify-end">
    //       <button className="btn btn-primary ">Add</button>
    //     </div>
    //   </form>
    // </dialog>
    <dialog id="my_modal_3" className="modal">
      <form onSubmit={handleSubmit} method="dialog" className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </form>
    </dialog>
  );
}
