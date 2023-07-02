"use-client";


export default function AddTaskForm({ addTask, updateTask }) {
  return (
    <div className=" flex justify-between items-center">
      <h1 className="font-bold text-lg md:text-xl">Daily Activity</h1>

      <button
        className="btn btn-sm btn-primary"
        onClick={() => window.my_modal_13.showModal()}
      >
        add task
      </button>
    </div>
  );
}
