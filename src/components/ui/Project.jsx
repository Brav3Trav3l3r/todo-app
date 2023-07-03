import { LuMoreHorizontal, LuCalendarDays } from "react-icons/lu";
export default function Project({ project }) {
  return (
    <>
      <div className="flex items-center gap-4 justify-between">
        <h1 className="font-semibold">{project.title}</h1>
        <LuMoreHorizontal />
      </div>
      <div className="badges flex flex-wrap gap-1">
        {project.badges.map((b) => (
          <div
            className={`badge ${
              b === "completed" ? "badge-primary" :  b === 'halted' ? 'badge-error' :  "badge-secondary"
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
          value={project.progress}
          max="100"
        ></progress>
      </div>

      <div className="info flex justify-between items-center">
        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-8">
              <img src="profile.jpg" />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="w-8 bg-neutral-focus text-neutral-content">
              <span>+99</span>
            </div>
          </div>
        </div>
        <div className="calender flex items-center gap-1">
          <LuCalendarDays />
          <h1 className="text-sm">{project.createdAt}</h1>
        </div>
      </div>
    </>
  );
}
