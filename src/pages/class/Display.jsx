import React, { useState } from "react";
import Students from "./Students";
import Schedule from "./Schedule";

function Display() {
  const [activeTab, setActiveTab] = useState("students");
  const activeDiv = () => {
    switch (activeTab) {
      case "students":
        return <Students />;

      case "schedule":
        return <Schedule />;

      default:
        return;
    }
  };
  return (
    <div dir="rtl" className="mx-auto max-w-[1000px] flex flex-col pt-[12rem]">
      {/* H1 */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center  justify-center mb-6 ">
        <h1 className="font-cairoRegular text-2xl text-[#999999]">شعبة أ</h1>
      </div>

      {/* switch */}
      <div className="mb-[2rem] border border-black px-6 py-3 w-fit text-lg bg-white">
        <label
          onClick={() => setActiveTab("students")}
          className={`${
            activeTab === "students" && "text-blue-500 "
          }  ml-8 cursor-pointer font-cairoSemiBold `}
        >
          الطلاب
        </label>
        <label className="border-r border-black"></label>
        <label
          onClick={() => setActiveTab("schedule")}
          className={`${
            activeTab === "schedule" && "  text-blue-500 "
          }  cursor-pointer font-cairoSemiBold mr-6`}
        >
          الجدول
        </label>
      </div>
      {/* CALLING */}
      <div>{activeDiv(activeTab)}</div>
    </div>
  );
}

export default Display;
