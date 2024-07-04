import { Outlet } from "react-router-dom";
import Nav from "../components/general/Nav";
import Footer from "../components/general/footer/Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
