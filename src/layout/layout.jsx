import { Outlet } from "react-router-dom";
import Nav from "../components/general/Nav";
import Footer from "../components/general/footer/Footer";
import FavoriteProvider from "../context/FavoriteProvider";

const Layout = () => {
  return (
    <>
      <Nav />
      <FavoriteProvider>
        <Outlet />
      </FavoriteProvider>

      <Footer />
    </>
  );
};

export default Layout;
