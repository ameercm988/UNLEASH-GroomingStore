import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer} from 'react-toastify'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
    <ToastContainer />
      <Header />
      {/* {props.children} */}
      {/* instead of props.children for new updated router-dom 6.4 */}
      <Outlet/>
      <Footer/>
    </>
  );
};

export default Layout;


