import React, { useState } from "react";
import Announce from "../pages/profile/teacherProfile/Announce";
import Thanks from "../pages/profile/teacherProfile/Thanks";
import { useNavigate } from "react-router-dom";

export default function TeacherProfile() {
  const [activeTab, setActiveTab] = useState("announce");
  const activeDiv = () => {
    switch (activeTab) {
      case "announce":
        return <Announce />;

      case "thanks":
        return <Thanks />;

      default:
        return;
    }
  };
  const navigate = useNavigate();
  const handleTeacherEdit = () => {
    navigate("/profile/teacheredit");
  };

  return (
    <div dir="rtl" className="mx-auto max-w-[1000px] flex pt-[12rem]  ">
      <div className="flex w-full flex-col md:flex-row justify-center md:justify-normal mx-auto md:mx-0 ">
        {/* Profile side */}
        <div className="bg-white rounded-md p-8 flex-[.3] flex-col mx-4 md:mx-auto">
          <div className="flex flex-col items-center justify-center">
            <img
              className="rounded-full bg-purple-500"
              width={150}
              height={150}
              src=""
              alt=""
            />
            <h1 className="self-center text-2xl font-cairoBold my-4 flex items-center">
              أ. علي حسن
              <FiEdit
                size={20}
                className="mr-4 cursor-pointer"
                onClick={handleTeacherEdit}
              />
            </h1>
          </div>
          <div className="border-l border border-black" />
          {/* details */}
          <div className="my-6">
            <h1 className="font-cairoBold text-[#9E9E9E]">معلومات شخصية</h1>
            <div className="flex">
              <h3 className="font-cairoBold">العمر:</h3>
              <h3 className="mr-4 font-cairoRegular">34</h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">الجنس:</h3>
              <h3 className="mr-4 font-cairoRegular">ذكر</h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">الجنسية:</h3>
              <h3 className="mr-4 font-cairoRegular">عراقي</h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">العنوان</h3>
              <h3 className="mr-4 font-cairoRegular">البصرة - عشار</h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">البريدالإلكتروني:</h3>
              <h3 className="mr-4 font-cairoRegular">ali.teacher@school.com</h3>
            </div>
            <h1 className="mt-6 font-cairoBold text-[#9E9E9E]">
              معلومات مهنية
            </h1>
            <div className="flex">
              <h3 className="font-cairoBold">الشهادة:</h3>
              <h3 className="mr-4 font-cairoRegular">علوم رياضيات</h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">سنوات الخبرة:</h3>
              <h3 className="mr-4 font-cairoRegular">5 سنوات</h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">الصفوف التي يدرسها:</h3>
              <h3 className="mr-4 font-cairoRegular">الأول, الثاني</h3>
            </div>
          </div>
        </div>
        {/* Thanks + announce */}
        <div className="flex-[.7] flex-col rounded-md bg-white mt-4 md:mt-0 md:mr-8 mx-4 md:mx-0 ">
          <div className="mx-8 my-6 text-md md:text-lg border-b border-blue-500 pb-4 ">
            <label
              onClick={() => setActiveTab("announce")}
              className={`${
                activeTab === "announce" && "border-b-4 border-blue-500 "
              } pb-3 ml-8 cursor-pointer font-cairoSemiBold `}
            >
              التبليغات
            </label>

            <label
              onClick={() => setActiveTab("thanks")}
              className={`${
                activeTab === "thanks" && "border-b-4  border-blue-500 "
              } pb-3 cursor-pointer font-cairoSemiBold `}
            >
              كتب الشكر
            </label>
          </div>
          {/* CALLING */}
          <div>{activeDiv(activeTab)}</div>
        </div>
      </div>
    </div>
  );
}
