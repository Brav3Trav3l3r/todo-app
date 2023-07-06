import { useRef, useState } from "react";
import { GrRadialSelected, GrRadial } from "react-icons/gr";

export default function ProjectStat() {
  // const projects = useRef([]);

  // useEffect(() => {
  //   projects.current = localStorage.getItem("PROJECTS");
  // }, []);

  return (
    <div className="st bg-accent p-4 space-y-4 rounded-lg shadow flex-1">
      <div className="title">
        <h1 className="font-semibold">Projects</h1>
      </div>

      <div className=" flex gap-2 items-center">
        <h1 className="text-6xl font-bold">4</h1>
        <p className="text-sm opacity-60">Projects has been created</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        <div className="flex flex-col shadow bg-secondary p-2 rounded-lg items-center gap-2 flex-1">
          <GrRadialSelected />
          <h1 className="font-semibold text-4xl">3</h1>
          <h1 className="text-xs opacity-70">Completed</h1>
        </div>
        <div className="flex flex-col shadow bg-secondary p-2 rounded-lg items-center gap-2 flex-1">
          <GrRadial />
          <h1 className="font-semibold text-4xl">2</h1>
          <h1 className="text-xs opacity-70 ">In progress</h1>
        </div>
      </div>
    </div>
  );
}
