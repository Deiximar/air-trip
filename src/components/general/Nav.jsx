import { NavLink } from "react-router-dom";
import "../../sass/header.scss";
const Nav = () => {
  return (
    <nav className="nav">
      <div className="navbar">
        <NavLink to="/" className="logo">
          <span>AIR</span>TRIP
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => {
            return isActive ? "dashboard-active" : "dashboard-button";
          }}
        >
          GO TO DASHBOARD
        </NavLink>
      </div>
    </nav>
  );
};
export default Nav;