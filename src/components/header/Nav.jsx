import { NavLink } from "react-router-dom";
import "../../sass/header.scss";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex nav bg-light-green">
      <div className="container-fluid">
        <NavLink to="/" className="logo">
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
