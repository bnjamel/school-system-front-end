import React, { useEffect, useState } from "react";
import Cv from "../pages/profile/studentProfile/Cv";
import Document from "../pages/profile/studentProfile/Document";
import Grades from "../pages/profile/studentProfile/Grades";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imagePlaceholder from "../assets/images/profile.png";
import { useStateValue } from "../context/StateProvider";

export default function StudentProfile({ id }) {
  const [{ user, endpoint }, dispatch] = useStateValue();
  const [activeTab, setActiveTab] = useState("cv");
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [studentDocument, setStudentDocument] = useState();
  const [studentDocumentPreview, setStudentDocumentPreview] = useState();

  const handleDocumentUpload = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setStudentDocumentPreview(URL.createObjectURL(e.target.files[0]));
      setStudentDocument(e.target.files[0]);
    }
  };

  useEffect(() => {
    axios
      .get(`${endpoint}student/byId/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const activeDiv = () => {
    switch (activeTab) {
      case "cv":
        return (
          <Cv about={data && data.about} evaluation={data && data.evaluation} />
        );

      case "document":
        return (
          <Document
            handleDocumentUpload={handleDocumentUpload}
            studentDocumentPreview={studentDocumentPreview}
            document={data.student_document_image}
          />
        );

      case "grades":
        return <Grades />;

      default:
        return;
    }
  };

  const handleStudentEdit = () => {
    navigate(`/profile/studentedit/${id}`);
  };

  return (
    <div dir="rtl" className="mx-auto max-w-[1400px] flex pt-[12rem] ">
      <div className="flex w-full flex-col md:flex-row justify-center md:justify-normal md:mx-0">
        {/* Profile side */}
        <div className="bg-white rounded-md p-8 flex-[.3] flex-col mx-4">
          <div className="flex flex-col items-center justify-center ">
            {data?.image ? (
              <div className="avatar">
                <div className="">
                  <img
                    width={150}
                    height={150}
                    src={endpoint + "images/" + data?.image}
                    className=" rounded-full"
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="relative">
                  <div className="avatar">
                    <div className="">
                      <img
                        width={150}
                        height={150}
                        src={imagePlaceholder}
                        className=" rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            <h1 className="self-center text-2xl font-cairoBold my-4 flex items-center">
              {data && data?.name}
            </h1>
          </div>
          <div className="border-l border border-black" />
          {/* details */}
          <div className="my-6 ">
            <h1 className="font-cairoBold text-[#9E9E9E]">معلومات شخصية</h1>
            <div className="flex">
              <h3 className="font-cairoBold">تاريخ الميلاد:</h3>
              <h3 className="mr-4 font-cairoRegular">
                {data && data.birthdate}
              </h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">الجنس:</h3>
              <h3 className="mr-4 font-cairoRegular">{data && data.gender}</h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">الجنسية:</h3>
              <h3 className="mr-4 font-cairoRegular">عراقي</h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">العنوان</h3>
              <h3 className="mr-4 font-cairoRegular">
                {data && data.location}
              </h3>
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
