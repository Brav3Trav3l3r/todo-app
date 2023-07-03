import Link from "next/link";
import Project from "./Project";

export default function ProjectsAll() {
  return (
    <div className="flex md:gap-6 gap-2">
      {projects.map((project) => (
        <Link href={`/project/${project.id}`} key={project.id} className="project  w-1/3 rounded-lg bg-blue-200/50 p-3 space-y-4">
          <Project project={...project}/>
        </Link>
      ))}
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "Todo app",
    progress: 100,
    badges: ["completed"],
    createdAt: "Aug 24",
  },
  {
    id: 2,
    title: "Anime site",
    progress: 20,
    badges: ["in-progress"],
    createdAt: "May 13",
  },
  {
    id: 3,
    title: "Eccomerce site",
    progress: 80,
    badges: ["halted"],
    createdAt: "Feb 12",
  },
];
