import React, { useEffect, useState } from "react";
import Cv from "../../pages/profile/studentProfile/Cv";
import Document from "../../pages/profile/studentProfile/Document";
import Grades from "../../pages/profile/studentProfile/Grades";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function ViewStudentProfile() {
  const { id, name } = useParams();
  const [data, setData] = useState();
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      console.log(name);
      axios
        .get(`http://localhost:3001/student/${name}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (id) {
      axios
        .get(`http://localhost:3001/student/byId/${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const [activeTab, setActiveTab] = useState("cv");
  const activeDiv = () => {
    switch (activeTab) {
      case "cv":
        return <Cv />;

      case "document":
        return <Document />;

      case "grades":
        return <Grades />;

      default:
        return;
    }
  };

  const handleStudentEdit = () => {
    navigate("/profile/studentedit");
  };

  return (
    <div dir="rtl" className="mx-auto max-w-[1400px] flex pt-[12rem] ">
      <div className="flex w-full flex-col md:flex-row justify-center md:justify-normal md:mx-0">
        {/* Profile side */}
        <div className="bg-white rounded-md p-8 flex-[.3] flex-col mx-4">
          <div className="flex flex-col items-center justify-center ">
            <img
              className="rounded-full bg-gradient"
              width={150}
              height={150}
              src=""
              alt=""
            />
            <h1 className="self-center text-2xl font-cairoBold my-4 flex items-center">
              {data?.name.length > 20 ? (
                <>{data?.name.slice(0, 20)}</>
              ) : (
                <>{data?.name}</>
              )}
              {user?.id === data?.id && (
                <FiEdit
                  size={20}
                  className="mr-4 cursor-pointer"
                  onClick={handleStudentEdit}
                />
              )}
            </h1>
          </div>
          <div className="border-l border border-black" />
          {/* details */}
          <div className="my-6 ">
            <h1 className="font-cairoBold text-[#9E9E9E]">معلومات شخصية</h1>
            <div className="flex">
              <h3 className="font-cairoBold">العمر:</h3>
              <h3 className="mr-4 font-cairoRegular">10</h3>
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
              <h3 className="font-cairoBold">اسم ولي الأمر:</h3>
              <h3 className="mr-4 font-cairoRegular">حسن علي</h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">رقم ولي الأمر:</h3>
              <h3 dir="ltr" className="mr-4 font-cairoRegular">
                0770 000 0000
              </h3>
            </div>
            <div className="flex ">
              <h3 className="font-cairoBold">البريدالإلكتروني:</h3>
              <h3 className="mr-4 font-cairoRegular">m.student@school.com</h3>
            </div>
            <h1 className="mt-6 font-cairoBold text-[#9E9E9E]">
              المعلومات الدراسية
            </h1>
            <div className="flex">
              <h3 className="font-cairoBold">الصف:</h3>
              <h3 className="mr-4 font-cairoRegular">السادس</h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">الشعبة:</h3>
              <h3 className="mr-4 font-cairoRegular">أ</h3>
            </div>
          </div>
        </div>
        {/* SECTION */}
        <div className="flex-[.7] flex-col rounded-md bg-white  mt-4 md:mt-0 md:mr-8 mx-4 md:mx-0">
          <div className="mx-8 my-6 text-md md:text-lg border-b border-blue-500 pb-4 ">
            <label
              onClick={() => setActiveTab("cv")}
              className={`${
                activeTab === "cv" && "border-b-4 border-blue-500 "
              }  pb-3 cursor-pointer font-cairoSemiBold `}
            >
              السيرة الدراسية
            </label>

            <label
              onClick={() => setActiveTab("document")}
              className={`${
                activeTab === "document" && "border-b-4  border-blue-500 "
              } pb-3 mx-8 cursor-pointer font-cairoSemiBold `}
            >
              الوثيقة
            </label>
            <label
              onClick={() => setActiveTab("grades")}
              className={`${
                activeTab === "grades" && "border-b-4  border-blue-500 "
              } pb-3 cursor-pointer font-cairoSemiBold `}
            >
              الدرجات
            </label>
          </div>
          {/* CALLING */}
          <div>{activeDiv(activeTab)}</div>
        </div>
      </div>
    </div>
  );
}
