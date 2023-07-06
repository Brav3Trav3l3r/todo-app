"use client";
import { LuCalendarDays } from "react-icons/lu";
import Moment from "react-moment";

export default function Details({ project }) {
  return (
    <div className="headings space-y-4">
      <h1 className="text-3xl font-bold">{project?.title}</h1>

      <p className="max-w-prose opacity-90">{project?.description}</p>

      <div className="calender flex items-center gap-1 opacity-70">
        <LuCalendarDays />
        <h1 className="text-sm ">
          <Moment unix>{project?.createdAt}</Moment>
        </h1>
      </div>
    </div>
  );
}
