
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Nav/Navbar";


function Layout() {
  return (
    <>
    <div className=" w-full h-full fixed top-0  bg-black -z-10"></div>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;
