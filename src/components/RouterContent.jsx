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
import Login from "../pages/login/Login";
import Announce from "../pages/announcements/Announce";
import NewAnnounce from "../pages/announcements/NewAnnounce";
import NewTeacher from "../pages/teacher/NewTeacher";
import NewStudent from "../pages/student/NewStudent";
import NewClass from "../pages/class/NewClass";
import Display from "../pages/class/Display";
import Schedule from "../pages/weekly_schedule/Schedule";
import StudentEdit from "../pages/profile/editProfile/StudentEdit";
import TeacherEdit from "../pages/profile/editProfile/TeacherEdit";
import ViewTeacherProfile from "../pages/profile/ViewTeacherProfile";
import ViewStudentProfile from "../pages/profile/ViewStudentProfile";
import Signup from "../pages/signup/Signup";
import Pending from "../pages/pending/Pending";

export default function RouterContent() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher/newteacher" element={<NewTeacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/student/newstudent" element={<NewStudent />} />
          <Route path="/annual_plan" element={<AnnualPlan />} />
          <Route path="/class" element={<Class />} />
          <Route path="/class/newclass" element={<NewClass />} />
          <Route path="/class/display/:id" element={<Display />} />

          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/studentedit/:id" element={<StudentEdit />} />
          <Route path="/profile/teacheredit/:id" element={<TeacherEdit />} />
          <Route path="/student/:id" element={<ViewStudentProfile />} />
          <Route path="/student/:name" element={<ViewStudentProfile />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/pending" element={<Pending />} />

          <Route path="/teacher/:id" element={<ViewTeacherProfile />} />
          <Route path="/teacher/:name" element={<ViewTeacherProfile />} />

          <Route path="/settings" element={<Settings />} />
          <Route path="/weekly_schedule" element={<WeeklySchedule />} />
          <Route path="/weekly_schedule/schedule/:id" element={<Schedule />} />
          <Route path="/announcements" element={<Announcements />} />
          {/* <Route path="/announcements/announce" element={<Announce />} /> */}
          <Route path="/announcements/:id" element={<Announce />} />
          <Route path="/announcements/newannounce" element={<NewAnnounce />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
