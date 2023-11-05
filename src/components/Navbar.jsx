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
    <div className="flex  justify-between items-center p-2 border-b border-black/50">
      {/* profile */}
      <div className="items-center flex ml-10">
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
        {/* ring */}
        <div className="flex">
          <button className="mx-8">
            <BsBell className="w-[24px] h-[24px]" />
          </button>
        </div>
      </div>

      {/* name */}
      <div className="mr-2 lg:mr-10 flex items-center">
        <h1 className="lg:text-[1.6rem] text-[#5D9EEB] font-cairoBold">
          المدرسة
        </h1>

        <div className="block lg:hidden mx-2 px-2 cursor-pointer rotate-90">
          |||
        </div>
      </div>
    </div>
  );
}

export default Navbar;
