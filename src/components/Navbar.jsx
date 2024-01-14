import React, { useEffect, useState } from "react";

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

function Navbar({ location }) {
  const [{ user, endpoint }, dispatch] = useStateValue();
  const [requests, setRequests] = useState();
  let navigator = useNavigate();

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
                  <div className="relative flex-row-reverse shadow-sm hover:shadow-md transition ease-in-out cursor-pointer py-2 px-4 bg-white border rounded-full flex items-center justify-center">
                    {/* IMAGE */}
                    <div className="w-[40px] mx-1 h-[40px] bg-gradient rounded-full"></div>

                    <h1 className="text-black mx-1">
                      <BiDownArrow className="w-[18px] h-[18px]" />
                    </h1>
                    {requests && (
                      <>
                        {requests.length >= 0 && (
                          <>
                            {user.role === "admin" && (
                              <div className="absolute left-0 top-0 mr-2  w-4 h-4 flex justify-center items-center rounded-full bg-red-500"></div>
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
                  <BsBell className="w-[24px] h-[24px]" />
                </button>
              </div>
            </div>
            <div className="mr-2 lg:mr-10 flex items-center">
              <h1 className="lg:text-[1.6rem] text-[#7150CF] font-cairoBold">
                مدرسة أكد
              </h1>

              {location.pathname === "login" && (
                <div className="block lg:hidden mx-2 px-2 cursor-pointer rotate-90">
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
      {/* profile */}
      {/* {location.pathname !== "/login" && (
        <div className="items-center flex ml-10">
          <Menu className="">
            <MenuHandler>
              <div className="flex-row-reverse shadow-sm hover:shadow-md transition ease-in-out cursor-pointer py-2 px-4 bg-white border rounded-full flex items-center justify-center">
                <div className="w-[40px] mx-1 h-[40px] bg-gradient rounded-full"></div>
                <h1 className="text-black mx-1">
                  <BiDownArrow className="w-[18px] h-[18px]" />
                </h1>
              </div>
            </MenuHandler>
            <MenuList dir="rtl">
              {user.role !== "admin" && (
                <MenuItem>
                  <Link to="#">الملف الشخصي</Link>
                </MenuItem>
              )}
              {user.role === "admin" && (
                <MenuItem>
                  <Link to="/settings">الاعدادات</Link>
                </MenuItem>
              )}

              <MenuItem className="text-red-400" onClick={onLogout}>
                تسجيل خروج
              </MenuItem>
            </MenuList>
          </Menu>
          <div className="flex">
            <button className="mx-8">
              <BsBell className="w-[24px] h-[24px]" />
            </button>
          </div>
        </div>
      )} */}

      {/* {location.pathname === "/login" && (
        <div className="mr-2 lg:mr-10 flex items-center w-full justify-center">
          <h1 className="lg:text-[1.6rem] text-[#7150CF] font-cairoBold">
            المدرسة
          </h1>

          {location.pathname === "login" && (
            <div className="block lg:hidden mx-2 px-2 cursor-pointer rotate-90">
              |||
            </div>
          )}
        </div>
      )}

      {location.pathname === "/signup" && (
        <div className="mr-2 lg:mr-10 flex items-center w-full justify-center">
          <h1 className="lg:text-[1.6rem] text-[#7150CF] font-cairoBold">
            المدرسة
          </h1>

          {location.pathname === "login" && (
            <div className="block lg:hidden mx-2 px-2 cursor-pointer rotate-90">
              |||
            </div>
          )}
        </div>
      )} */}
      {navbarView()}
      {/* name */}
      {/* <div className="mr-2 lg:mr-10 flex items-center">
        <h1 className="lg:text-[1.6rem] text-[#7150CF] font-cairoBold">
          المدرسة
        </h1>

        {location.pathname === "login" && (
          <div className="block lg:hidden mx-2 px-2 cursor-pointer rotate-90">
            |||
          </div>
        )}
      </div> */}
    </div>
  );
}

export default Navbar;
