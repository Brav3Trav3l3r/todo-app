export default function ProjectFilter({ color }) {
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="filter flex justify-between items-center"
      >
        <h1 className="font-bold text-lg md:text-xl">Your projects</h1>
        <div className="navbar-center flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary className="font-semibold">All Projects</summary>
                <ul className="p-2">
                  <li>
                    <a>All Projects</a>
                  </li>
                  <li>
                    <a>Recent Projects</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
