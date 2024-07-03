import { NavLink } from "react-router-dom";
import "../../sass/header.scss";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex nav bg-light-green px-5">
      <div className="container-fluid">
        <a className="logo fs-2" href="#">
          <span>AIR</span>TRIP
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) => {
            if (isActive) {
              return `btn btn-secondary text-light rounded-pill border-primary disabled`;
            }
            return `btn btn-outline-secondary text-secondary bg-light rounded-pill`;
          }}
        >
          GO TO DASHBOARD
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
