import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="logo">ABS</h3>

      <nav>
        <NavLink to="/admin/dashboard">
          Dashboard
        </NavLink>
        <NavLink to="/admin/meeting-channel">
          Meeting Channel
        </NavLink>
        <NavLink to="/admin/events">
          Events
        </NavLink>
        <NavLink to="/admin/events-create">
          Events
        </NavLink>

        {/* <NavLink to="/admin/users">
          Users
        </NavLink> */}

        <NavLink to="/admin/meetings">
          Meetings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;