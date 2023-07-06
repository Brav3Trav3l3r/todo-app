import { LuMoreHorizontal, LuCalendarDays } from "react-icons/lu";
import Moment from "react-moment";

export default function Project({ project }) {
  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <h1 className="font-semibold">{project?.title}</h1>
        <LuMoreHorizontal />
      </div>
      <div className="badges flex flex-wrap gap-1">
        {project?.badges?.map((b) => (
          <div
            className={`badge ${
              b === "completed"
                ? "badge-primary"
                : b === "halted"
                ? "badge-error"
                : "badge-secondary"
            }`}
          >
            {b}
          </div>
        ))}
      </div>

      <div className="">
        <h1 className="text-sm opacity-70">Progress</h1>
        <progress
          className="progress w-full"
          value={project?.progress}
          max="100"
        ></progress>
      </div>

      <div className="info flex justify-between items-center">
        <div className="calender flex items-center gap-1">
          <LuCalendarDays />
          <h1 className="text-sm">
            {" "}
            <Moment unix>{project?.createdAt}</Moment>
          </h1>
        </div>
      </div>
    </>
  );
}
