import React, { useEffect, useRef, useState } from "react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import axios from "axios";

import { BiDownArrow } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import SidebarLink from "./SidebarLink";

function Navbar({ location }) {
  const [{ user, endpoint }, dispatch] = useStateValue();
  const [requests, setRequests] = useState();
  let navigator = useNavigate();
  const [openNav, setOpenNav] = useState(false);

  const navRef = useRef(null);
  const navContainerRef = useRef(null);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const getPendingRequests = async () => {
    await axios
      .get(`${endpoint}pending/`)
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPendingRequests();
  }, []);

  const onLogout = () => {
    dispatch({
      type: "SET_LOGIN",
      isLogged: false,
    });

    dispatch({
      type: "SET_PROFILE",
      profile: {},
    });

    dispatch({
      type: "SET_USER",
      user: {
        fullName: "",
        email: "",
        id: "",
        role: "",
      },
    });
    localStorage.removeItem("accessToken");
    navigator("/login");
  };

  const navbarView = () => {
    switch (location.pathname) {
      case "/login":
        return (
          <div className="mr-2 lg:mr-10 flex items-center w-full justify-center">
            <h1 className="lg:text-[1.6rem] text-[#7150CF] font-cairoBold">
              مدرسة أكد
            </h1>

            {location.pathname === "login" && (
              <div className="block lg:hidden mx-2 px-2 cursor-pointer rotate-90">
                |||
              </div>
            )}
          </div>
        );

      case "/signup":
        return (
          <div className="mr-2 lg:mr-10 flex items-center w-full justify-center">
            <h1 className="lg:text-[1.6rem] text-[#7150CF] font-cairoBold">
              مدرسة أكد
            </h1>

            {location.pathname === "login" && (
              <div className="block lg:hidden mx-2 px-2 cursor-pointer rotate-90">
                |||
              </div>
            )}
          </div>
        );

      case "/pending":
        return (
          <div className="mr-2 lg:mr-10 flex items-center w-full justify-center">
            <h1 className="lg:text-[1.6rem] text-[#7150CF] font-cairoBold">
              مدرسة أكد
            </h1>

            {location.pathname === "login" && (
              <div className="block lg:hidden mx-2 px-2 cursor-pointer rotate-90">
                |||
              </div>
            )}
          </div>
        );

      default:
        return (
          <>
            <div className="items-center flex ml-10">
              <Menu className="">
                <MenuHandler>
                  <div className="relative flex-row-reverse shadow-sm hover:shadow-md transition ease-in-out cursor-pointer py-1 px-2 lg:py-2 lg:px-4 bg-white border rounded-full flex items-center justify-center">
                    {/* IMAGE */}
                    <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] mx-1 bg-gradient rounded-full"></div>

                    <h1 className="text-black mx-1">
                      <BiDownArrow className="w-[18px] h-[18px]" />
                    </h1>
                    {requests && (
                      <>
                        {requests.length >= 0 && (
                          <>
                            {user.role === "admin" && (
                              <div className="absolute left-0 top-0 mr-2 w-3 h-3 lg:w-4 lg:h-4 flex justify-center items-center rounded-full bg-red-500"></div>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </div>
                </MenuHandler>
                <MenuList dir="rtl">
                  {user.role !== "admin" && (
                    <MenuItem>
                      <Link to={`/profile/${user.id}`}>الملف الشخصي</Link>
                    </MenuItem>
                  )}
                  {user.role === "admin" && (
                    <MenuItem>
                      <Link
                        className="flex justify-between items-center"
                        to="/settings"
                      >
                        <p>الاعدادات</p>
                        {requests && (
                          <>
                            {requests.length >= 0 && (
                              <div className="min-w-2 min-h-2 w-2 h-2 rounded-full bg-red-500"></div>
                            )}
                          </>
                        )}
                      </Link>
                    </MenuItem>
                  )}

                  <MenuItem className="text-red-400" onClick={onLogout}>
                    تسجيل خروج
                  </MenuItem>
                </MenuList>
              </Menu>
              <div className="flex">
                <button className="mx-8">
                  <BsBell className="hidden lg:block w-[24px] h-[24px]" />
                </button>
              </div>
            </div>
            <div className="mr-2 lg:mr-10 flex items-center">
              <h1 className="lg:text-[1.6rem] text-[#7150CF] font-cairoBold">
                مدرسة أكد
              </h1>

              {location.pathname !== "login" && (
                <div
                  onClick={() => setOpenNav(true)}
                  className="block lg:hidden mx-2 px-2 cursor-pointer rotate-90"
                >
                  |||
                </div>
              )}
            </div>
          </>
        );
    }
  };

  return (
    <div
      className={`flex z-[100]
        ${
          location.pathname !== "login"
            ? "justify-between border-b border-black/50"
            : "justify-center"
        }
        ${
          location.pathname !== "/signup"
            ? "justify-between border-b border-black/50"
            : "justify-center"
        }

       items-center p-2`}
    >
      {navbarView()}
      <div
        className={`h-[100vh] w-[100vw] absolute left-0 top-0 ${
          openNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div ref={navContainerRef} className="relative">
          <div
            ref={navRef}
            className={`shadow-lg z-[100] absolute right-0 w-[60%] md:w-[30%] h-[100vh] bg-[#f7f7fc] transition ease-in-out ${
              openNav ? "translate-x-[0]" : "translate-x-[50%]"
            }`}
          >
            <div className="mr-2 lg:mr-10 flex justify-end items-center py-[1.52rem] lg:py-[1.08rem] border-b border-black/25 px-6">
              <h1 className="lg:text-[1.6rem] text-[#7150CF] font-cairoBold">
                مدرسة أكد
              </h1>
              <div
                onClick={() => setOpenNav(false)}
                className="block mx-2 px-2 cursor-pointer rotate-90"
              >
                |||
              </div>
            </div>

            <ul className="flex-wrap flex justify-end items-end pt-[1rem] px-[1.5rem] lg:px-[4rem] flex-col">
              <SidebarLink
                onClick={() => setOpenNav(false)}
                link="/"
                text="الصفحة الرئيسية"
              />
              <SidebarLink
                onClick={() => setOpenNav(false)}
                link="/teacher"
                text="الاساتذة"
              />
              <SidebarLink
                onClick={() => setOpenNav(false)}
                link="/student"
                text="الطلاب"
              />
              <SidebarLink
                onClick={() => setOpenNav(false)}
                link="/class"
                text="الصفوف"
              />
              <SidebarLink
                onClick={() => setOpenNav(false)}
                link="/weekly_schedule"
                text="الجدول الاسبوعي"
              />
              <SidebarLink
                onClick={() => setOpenNav(false)}
                link="/annual_plan"
                text="الخطة السنوية"
              />
              <SidebarLink
                onClick={() => setOpenNav(false)}
                link="/announcements"
                text="التبليغات"
              />
              {user.role === "admin" && (
                <SidebarLink
                  onClick={() => setOpenNav(false)}
                  link="/settings"
                  text="الاعدادات"
                />
              )}
              {user.role !== "admin" && (
                <SidebarLink
                  onClick={() => setOpenNav(false)}
                  link={`/profile/${user.id}`}
                  text="الملف الشخصي"
                />
              )}
            </ul>
          </div>
          <div
            onClick={() => openNav && setOpenNav(false)}
            className="bg w-full h-[100vh] bg-black/15 backdrop-blur-[1px]"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
