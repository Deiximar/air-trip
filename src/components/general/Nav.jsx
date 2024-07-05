import { NavLink } from "react-router-dom";
import "../../sass/header.scss";
import { FaRegUserCircle } from "react-icons/fa"

const Nav = () => {
  return (
    <nav className="nav">
      <div className="navbar">
        <NavLink to="/" className="logo">
          <span>AIR</span>TRIP
        </NavLink>
        <div className="navbarBtns">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => {
              return isActive ? "dashboard-active" : "dashboard-button";
            }}
          >
            GO TO DASHBOARD
          </NavLink>
          <NavLink to="/login">
            <FaRegUserCircle className="userIcon" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Nav;