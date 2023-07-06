import Modal from "../Modal";
import ProjectTask from "./ProjectTask";

export default function ProjectTasks({
  project,
  handleChildToggle,
  handleToggle,
  addChildTask,
  addTask,
  deleteTask,
  deleteChildTask
}) {
  return (
    <div className="tasks max-w-3xl space-y-4">
      <h1 className="font-bold text-lg md:text-xl">Tasks</h1>
      <div className="tasklist space-y-4">
        {project?.tasks?.map((t) => (
          <div key={t.id} className="">
            <ProjectTask
              t={t}
              handleChildToggle={handleChildToggle}
              handleToggle={handleToggle}
              addChildTask={addChildTask}
              deleteTask={deleteTask}
              deleteChildTask={deleteChildTask}
            />
          </div>
        ))}
      </div>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => window.my_modal_13.showModal()}
      >
        add task
      </button>
      <Modal addTask={addTask}/>
    </div>
  );
}
