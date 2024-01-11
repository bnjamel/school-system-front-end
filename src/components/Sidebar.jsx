import * as React from "react";
import { Link } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import { useStateValue } from "../context/StateProvider";

export default function Sidebar({ location }) {
  const sidebarView = () => {
    switch (location.pathname) {
      case "/login":
        return <></>;
      case "/signup":
        return <></>;
      case "/pending":
        return <></>;
      default:
        return (
          <ul className="flex-wrap flex flex-row gap-x-6">
            <SidebarLink link="/" text="الصفحة الرئيسية" />
            <SidebarLink link="/teacher" text="الاساتذة" />
            <SidebarLink link="/student" text="الطلاب" />
            <SidebarLink link="/class" text="الصفوف" />
            <SidebarLink link="/weekly_schedule" text="الجدول الاسبوعي" />
            <SidebarLink link="/annual_plan" text="الخطة السنوية" />
            <SidebarLink link="/announcements" text="التبليغات" />
            {user.role === "admin" && (
              <SidebarLink link="/settings" text="الاعدادات" />
            )}
            {user.role !== "admin" && (
              <SidebarLink link={`/profile/${user.id}`} text="الملف الشخصي" />
            )}
          </ul>
        );
    }
  };

  const [{ user }, dispatch] = useStateValue();
  return (
    <div dir="rtl" className="">
      {/* {location.pathname !== "/login" && (
        <ul className="flex-wrap flex flex-row gap-x-6">
          <SidebarLink link="/" text="الصفحة الرئيسية" />
          <SidebarLink link="/teacher" text="الاساتذة" />
          <SidebarLink link="/student" text="الطلاب" />
          <SidebarLink link="/class" text="الصفوف" />
          <SidebarLink link="/weekly_schedule" text="الجدول الاسبوعي" />
          <SidebarLink link="/annual_plan" text="الخطة السنوية" />
          <SidebarLink link="/announcements" text="التبليغات" />
          {user.role === "admin" && (
            <SidebarLink link="/settings" text="الاعدادات" />
          )}
          {user.role !== "admin" && (
            <SidebarLink link={`/profile/${user.id}`} text="الملف الشخصي" />
          )}
        </ul>
      )} */}
      {sidebarView()}
    </div>
  );
}
