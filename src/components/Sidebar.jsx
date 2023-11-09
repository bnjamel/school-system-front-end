import * as React from "react";
import { Link } from "react-router-dom";
import SidebarLink from "./SidebarLink";

export default function Sidebar({location}) {
  console.log(location)
  return (
    <div dir="rtl" className="">
      {location.pathname !== "/login" &&
      <ul className="flex-wrap flex flex-row gap-x-6">
        <SidebarLink link="/" text="الصفحة الرئيسية" />
        <SidebarLink link="/teacher" text="الاساتذة" />
        <SidebarLink link="/student" text="الطلاب" />
        <SidebarLink link="/class" text="الصفوف" />
        <SidebarLink link="/weekly_schedule" text="الجدول الاسبوعي" />
        <SidebarLink link="/annual_plan" text="الخطة السنوية" />
        <SidebarLink link="/announcements" text="التبليغات" />
        <SidebarLink link="/settings" text="الاعدادات" />
        <SidebarLink link="/profile" text="الملف الشخصي" />
      </ul>
      
      }
    </div>
  );
}
