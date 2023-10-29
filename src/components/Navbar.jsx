import React from "react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import { BiDownArrow } from "react-icons/bi";
import { BsBell } from "react-icons/bs";

function Navbar() {
  return (
    <div>
      <div
        dir="rtl"
        className="absolute left-0 top-0 py-2 pl-[4rem] pr-1 sm:pr-2 md:pr-3 lg:pr-4 border-b w-full hidden md:flex flex-row justify-between items-center"
      >
        <div className=" my-2 flex items-center">
          <div className="block lg:hidden  px-2 mx-6 hover:bg-black/20 cursor-pointer rotate-90">
            |||
          </div>
          <div>
            <h1 className="lg:text-[1.6rem] text-black lg:text-white font-cairoBold">
              مدرسة
            </h1>
            <p className="text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] font-cairoSemiBold lg:text-light-300 text-gray-600">
              اسم المدرسة كامل
            </p>
          </div>
        </div>
        <div className="flex">
          <button className="mx-8">
            <BsBell className="w-[24px] h-[24px]" />
          </button>

          <Menu className="">
            <MenuHandler>
              <Button className="py-2 px-4 bg-white border rounded-full flex items-center justify-center">
                <div className="w-[40px] mx-1 h-[40px] bg-blue-500 rounded-full"></div>
                <h1 className="text-black mx-1">
                  <BiDownArrow className="w-[18px] h-[18px]" />
                </h1>
              </Button>
            </MenuHandler>
            <MenuList dir="rtl">
              <MenuItem>
                <a href="#">الملف الشخصي</a>
              </MenuItem>
              <MenuItem>
                <a href="#">الاعدادات</a>
              </MenuItem>
              <MenuItem className="text-red-400">تسجيل خروج</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
