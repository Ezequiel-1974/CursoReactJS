import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <div>
        <Navbar />

        <Outlet />

        <Footer />

    </div>
  );
};

export default Layout;
