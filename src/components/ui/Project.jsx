import { LuMoreHorizontal, LuCalendarDays } from "react-icons/lu";
export default function Project({ color }) {
  return (
    <>
      <div className="project-card w-1/3 rounded-lg bg-blue-200/50 p-3 space-y-4">
        <div className="flex items-center gap-4 justify-between">
          <h1 className="font-semibold">Todo app</h1>
          <LuMoreHorizontal />
        </div>
        <div className="badges flex flex-wrap gap-1">
          <div className="badge badge-primary">primary</div>
          <div className="badge badge-secondary">secondary</div>
        </div>

        <div className="border">
          <h1>Progress</h1>
          <progress className="progress w-full" value="70" max="100"></progress>
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
            <h1 className="text-sm">June 23</h1>
          </div>
        </div>
      </div>
    </>
  );
}
