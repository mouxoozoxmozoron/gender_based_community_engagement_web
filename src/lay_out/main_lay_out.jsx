import React from "react";
import Footer from "../componnent/footer";
import MainHeader from "../componnent/main_header";
import { Outlet } from "react-router-dom";

function MainLayOut() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  );
}
export default MainLayOut;
