import React from "react";
import Details from "@/components/ui/Projects/Detail";
import ProjectTasks from "@/components/ui/Projects/ProjectTasks";

export default function DrawerContent({project, handleChildToggle, handleToggle, addChildTask, addTask, deleteTask, deleteChildTask}) {
  return (
    <div className="drawer-content">
      <div className="py-6 xl:px-20 px-4 lg:px-8 space-y-8">
        <Details project={project} />
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-sm btn-info"
        >
          Edit project
        </label>
        {/* task */}
        <ProjectTasks
          project={project}
          handleChildToggle={handleChildToggle}
          handleToggle={handleToggle}
          addChildTask={addChildTask}
          addTask={addTask}
          deleteTask={deleteTask}
          deleteChildTask={deleteChildTask}

        />
      </div>
    </div>
  );
}
