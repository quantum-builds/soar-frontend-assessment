import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../header";
import SideBar from "../sideBar";

const RootLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="md:flex-1 w-full flex flex-col">
        <Header />
        <div className="md:flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
