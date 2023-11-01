import * as React from "react";
import { Link } from "react-router-dom";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  return (
    <div className="flex">
      <div dir="" className="w-full">
        <div dir="rtl" className="w-full flex h-full">
          <div className="">
            <ul className="flex flex-row ">
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
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="min-w-full min-h-full pl-4 pr-1 sm:pr-2 md:pr-3 lg:pr-4 overflow-hidden">

{
  /* <div dir="rtl" className="w-full">
<div className="px-4 py-14 "></div>
</div>

<div dir="rtl" className="w-full flex h-full">
<div className="flex justify-between flex-col flex-1 pb-[10rem]">
  <ul className="flex flex-col justify-start">
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
</div>
</div> */
}
