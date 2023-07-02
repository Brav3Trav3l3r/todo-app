import ProjectFilter from "./ProjectFilter";
import ProjectsAll from "./ProjectsAll";

export default function Projects() {
  return (
    <>
      <div className="main">
        <ProjectFilter />
        <ProjectsAll />
      </div>
    </>
  );
}
