import * as React from "react";
import { Link } from "react-router-dom";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  return (
    <div className="min-w-full min-h-full pl-4 pr-1 sm:pr-2 md:pr-3 lg:pr-4 overflow-hidden">
        <div dir="rtl" className="w-full">
          <div className="px-4 py-2 my-2 ">
            <h1 className="lg:text-[1.6rem] font-cairoBold text-transparent">مدرسة</h1>
            <p className="lg:text-[1.1rem] font-cairoSemiBold text-transparent text-">السم المدرسة كامل</p>
          </div>
        </div>

        <div dir="rtl" className="w-full flex h-full">
          <div className="flex justify-between flex-col flex-1 pb-[8rem]">
            <ul className="flex flex-col justify-start py-4">
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
            <div className="flex justify-center items-center">
              <button className="py-2 px-6 border rounded-md hover:bg-white text-white hover:text-black transition ease-linear">تسجيل خروج</button>
            </div>
          </div>
        </div>
    </div>
  );
}
