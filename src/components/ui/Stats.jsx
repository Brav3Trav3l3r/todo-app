'use client'

import ProjectStat from "./ProjectStat";
import TaskStat from "./TaskStat";

export default function Stats({tasks, projects}) {
  return (
    <>
      <main className="bg-purple-100 rounded-lg p-4 space-y-4">
        <h1 className="font-bold text-lg md:text-xl">Stats</h1>
        <div className="flex gap-4">
          <ProjectStat projects={projects}/>
          <TaskStat tasks={tasks}/>
        </div>
      </main>
    </>
  );
}
