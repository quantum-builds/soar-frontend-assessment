import React, { useState } from "react";
import {
  NotificationBellIcon,
  SettingLogo,
  SearchIcon,
  ProfilePic,
  HamburgerIcon,
} from "../assets";

const HeaderView = () => {
  return (
    <div className=" h-[140px] md:h-[100px]  right-0 md:border-b-[1px]">
      <header className="hidden md:flex w-full items-center justify-between py-4 px-10 sticky">
        <h1 className="text-[28px] leading-{33px} font-semibold"> Overview</h1>
        <div className="flex gap-11">
          <div className="flex items-center bg-[#F5F7FA] rounded-[40px] py-4 px-5 gap-4">
            <img src={SearchIcon} className="cursor-pointer" />
            <input
              type="text"
              placeholder="Search for something"
              className="focus:outline-none bg-[#F5F7FA] text-base"
            />
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-[#F5F7FA] flex items-center justify-center ">
            <img src={SettingLogo} className="cursor-pointer" />
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-[#F5F7FA] flex items-center justify-center ">
            <img src={NotificationBellIcon} className="cursor-pointer" />
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-[#F5F7FA] flex items-center justify-center ">
            <img src={ProfilePic} className="cursor-pointer" />
          </div>
        </div>
      </header>

      <header className="flex flex-col md:hidden w-full gap-2 p-5 ">
        <div className="flex justify-between items-center ">
          <button>
            <img src={HamburgerIcon} alt="Menu" className="w-[14px] h-[18px]" />
          </button>
          <h1 className="text-[20px] leading-[33px] font-semibold">Overview</h1>
          <div className="h-[35px] w-[35px] rounded-full bg-[#F5F7FA] flex items-center justify-center ">
            <img src={ProfilePic} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center bg-[#F5F7FA] rounded-[40px] py-4 px-5 gap-4 mt-5 w-full">
          <img src={SearchIcon} className="cursor-pointer" />
          <input
            type="text"
            placeholder="Search for something"
            className="focus:outline-none bg-[#F5F7FA] text-base w-full"
          />
        </div>
      </header>
    </div>
  );
};

export default HeaderView;
