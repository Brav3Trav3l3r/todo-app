import Task from "./Task";

export default function Tasks({ project, handleChildToggle, handleToggle, addChildTask }) {
  return (
    <div className="tasks max-w-3xl space-y-4">
      <h1 className="font-bold text-lg md:text-xl">Tasks</h1>
      <div className="tasklist space-y-4">
        {project.tasks?.map((t) => (
          <div key={t.id} className="">
            <Task
              t={t}
              handleChildToggle={handleChildToggle}
              handleToggle={handleToggle}
              addChildTask={addChildTask}
            />
          </div>
        ))}
      </div>
      <button className="btn w-full btn-outline btn-primary">
        Add new Task
      </button>
    </div>
  );
}
