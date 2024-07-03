import { Outlet } from "react-router-dom";
import Nav from "../components/header/Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
