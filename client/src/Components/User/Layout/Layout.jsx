import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      {/* {props.children} */}
      {/* instead of props.children for new updated router-dom 6.4 */}
      <Outlet/>    
      <Footer/>
    </>
  );
};

export default Layout;
