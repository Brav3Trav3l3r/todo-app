import { useState } from "react";

export default function ProjectFilter({ addProject }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    if (desc !== "" && title !== "") {
      addProject(title, desc);
    }
  };

  return (
    <>
      <div className="filter flex justify-between items-center pb-2">
        <h1 className="font-bold text-lg md:text-xl">Your projects</h1>
        <div className="navbar-center flex">
          {/* You can open the modal using ID.showModal() method */}
          <button
            className="btn btn-sm btn-primary"
            onClick={() => window.my_modal_3.showModal()}
          >
            Add Project
          </button>
          <dialog id="my_modal_3" className="modal">
            <form
              onSubmit={handleSubmit}
              method="dialog"
              className="modal-box "
            >
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <div className="body space-y-6 py-3">
                <div className="title space-y-2">
                  <label htmlFor="title text-sm opacity-80">Title</label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="desc space-y-2">
                  <label htmlFor="desc text-sm opacity-80">Description</label>
                  <textarea
                    id="desc"
                    className="textarea textarea-bordered w-full"
                    placeholder="Bio"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                  ></textarea>
                </div>
              </div>
              <button className="w-full btn btn-secondary">Add project</button>
            </form>
          </dialog>
        </div>
      </div>
    </>
  );
}
