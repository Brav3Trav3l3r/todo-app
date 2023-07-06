"use client";

import Moment from "react-moment";

export default function Task({ task, handleToggle, deleteTask }) {
  return (
    <tr>
      <th>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={task.completed}
            onChange={(e) => handleToggle(e.target.checked, task.id)}
          />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-semibold">{task.title}</div>
          </div>
        </div>
      </td>

      <td>
        <Moment unix>{task.time}</Moment>
        {/* {task.time} */}
      </td>
      <th className="">
        <div className="buttons flex gap-2 justify-end">
          <button
            onClick={() => deleteTask(task.id)}
            className="btn btn-error btn-xs"
          >
            Delete
          </button>
        </div>
      </th>
    </tr>
  );
}
