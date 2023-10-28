import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Teacher from "../pages/teacher/Teacher";
import Student from "../pages/student/Student";
import AnnualPlan from "../pages/annual_plan/AnnualPlan";
import Class from "../pages/class/Class";
import Profile from "../pages/profile/Profile";
import Settings from "../pages/settings/Settings";
import WeeklySchedule from "../pages/weekly_schedule/WeeklySchedule";
import Announcements from "../pages/announcements/Announcements";

export default function RouterContent() {
  return (
    <div className="w-full h-full">
        <div dir="rtl" className="w-full h-full pt-[8rem]">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teacher" element={<Teacher />} />
                <Route path="/student" element={<Student />} />
                <Route path="/annual_plan" element={<AnnualPlan />} />
                <Route path="/class" element={<Class />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/weekly_schedule" element={<WeeklySchedule />} />
                <Route path="/announcements" element={<Announcements />} />
            </Routes>
        </div>
    </div>
  );
}
