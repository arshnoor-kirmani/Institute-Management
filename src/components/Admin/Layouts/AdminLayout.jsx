import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header_Footer/Header";
import Footer from "../Pages/Header_Footer/Footer";
import NavBox from "../Pages/NavContainer/NavBox";
export default function AdminLayout() {
  return (
    <div className=" w-screen h-screen grid grid-rows-[14%_81%_5%] bg-blackcurrant-400">
      <Header />
      <div className=" w-full h-full grid grid-cols-[17%_83%]">
        <NavBox></NavBox>
        <div className=" w-full h-full overflow-x-hidden overflow-y-auto px-1.5">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </div>
  );
}
