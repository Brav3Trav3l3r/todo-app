import ProjectFilter from "./ProjectFilter";
import ProjectsAll from "./ProjectsAll";

export default function Projects({projects, addProject}) {
  return (
    <>
      <div className="main">
        <ProjectFilter addProject={addProject}/>
        <ProjectsAll projects={projects} />
      </div>
    </>
  );
}
