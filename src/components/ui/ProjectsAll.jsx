import Link from "next/link";
import Project from "./Project";
import { useState, useEffect } from "react";

export default function ProjectsAll({projects}) {

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 fgap-2">
      {projects?.map((project) => (
        <Link href={`/project/${project.id}`} key={project.id} className="project rounded-lg bg-blue-200/50 p-3 space-y-4">
          <Project project={...project}/>
        </Link>
      ))}
    </div>
  );
}
