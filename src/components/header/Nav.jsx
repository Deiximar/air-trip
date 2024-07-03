import "../../sass/header.scss";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex nav bg-light-green px-5">
      <div className="container-fluid">
        <a className="logo fs-2" href="#">
          <span>AIR</span>TRIP
        </a>

        <button
          className="btn btn-outline-secondary bg-light rounded-pill"
          type="button"
        >
          GO TO DASHBOARD
        </button>
      </div>
    </nav>
  );
};

export default Nav;
