import React, { useEffect, useState } from "react";
import Cv from "../../pages/profile/studentProfile/Cv";
import Document from "../../pages/profile/studentProfile/Document";
import Grades from "../../pages/profile/studentProfile/Grades";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { useParams } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import axios from "axios";
import { BiImageAdd } from "react-icons/bi";
import imagePlaceholder from "../../assets/images/profile.png";

export default function ViewStudentProfile() {
  const { id, name } = useParams();
  const [data, setData] = useState();
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [studentDocument, setStudentDocument] = useState();
  const [studentDocumentPreview, setStudentDocumentPreview] = useState();

  useEffect(() => {
    if (name) {
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

  const handleDocumentUpload = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setStudentDocumentPreview(URL.createObjectURL(e.target.files[0]));
      setStudentDocument(e.target.files[0]);
    }
  };

  const handleSubmitDocument = () => {
    console.log(id, studentDocument);
    if (studentDocument) {
      const formData = new FormData();
      formData.append("document", studentDocument);
      axios
        .put(`http://localhost:3001/student/updateDoc/${id}`, formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    window.location.reload();
  };

  const [activeTab, setActiveTab] = useState("cv");

  const activeDiv = () => {
    if (data) {
      switch (activeTab) {
        case "cv":
          return (
            <Cv
              about={data && data.about}
              evaluation={data && data.evaluation}
            />
          );

        case "document":
          return (
            <Document
              id={id}
              handleSubmitDocument={handleSubmitDocument}
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
    }
  };
  // onClick={() => handleStudentEdit(item?.id)}
  const handleStudentEdit = (id) => {
    navigate(`/profile/studentedit/${id}`);
  };

  return (
    <div dir="rtl" className="mx-auto max-w-[1400px] flex pt-[12rem] ">
      <div className="flex w-full flex-col md:flex-row justify-center md:justify-normal md:mx-0">
        {/* Profile side */}
        {data && (
          <div className="bg-white rounded-md p-8 flex-[.3] flex-col mx-4">
            <div className="flex flex-col items-center justify-center ">
              {/* <img
              className="rounded-full bg-gradient"
              width={150}
              height={150}
              src=""
              alt=""
            /> */}
              {data.image ? (
                <div className="relative">
                  <div className="avatar">
                    <div className="">
                      <img
                        width={150}
                        height={150}
                        src={"http://localhost:3001/images/" + data.image}
                        className=" rounded-full"
                      />
                    </div>
                  </div>
                  <div
                    onClick={() => handleStudentEdit(data?.id)}
                    className="items-center flex  absolute bottom-[-10px]"
                  >
                    {user.role === "admin" && (
                      <div className="bg-[#091420] cursor-pointer p-4 rounded-full">
                        <FiEdit className="text-white" />
                      </div>
                    )}
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
                    <div
                      onClick={() => handleStudentEdit(data?.id)}
                      className="items-center flex  absolute bottom-[-10px]"
                    >
                      {user.role === "admin" && (
                        <div className="bg-[#091420] cursor-pointer p-4 rounded-full">
                          <FiEdit className="text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* IoPersonOutline */}
              <h1 className="self-center text-2xl font-cairoBold my-4 flex items-center">
                {data?.name.length > 20 ? (
                  <>{data?.name.slice(0, 20)}</>
                ) : (
                  <>{data?.name}</>
                )}
              </h1>
            </div>
            <div className="border-l border border-black" />
            {/* details */}
            <div className="my-6 ">
              <h1 className="font-cairoBold text-[#9E9E9E]">معلومات شخصية</h1>
              <div className="flex">
                <h3 className="font-cairoBold">تاريخ الميلاد:</h3>
                <h3 className="mr-4 font-cairoRegular">
                  {data && data?.birthdate}
                </h3>
              </div>
              <div className="flex">
                <h3 className="font-cairoBold">الجنس:</h3>
                <h3 className="mr-4 font-cairoRegular">
                  {data && data?.gender}
                </h3>
              </div>
              <div className="flex">
                <h3 className="font-cairoBold">الجنسية:</h3>
                <h3 className="mr-4 font-cairoRegular">عراقي</h3>
              </div>
              <div className="flex">
                <h3 className="font-cairoBold">العنوان</h3>
                <h3 className="mr-4 font-cairoRegular">
                  {data && data?.location}
                </h3>
              </div>
              <div className="flex">
                <h3 className="font-cairoBold">اسم ولي الأمر:</h3>
                <h3 className="mr-4 font-cairoRegular">
                  {data && data?.parent}
                </h3>
              </div>
              <div className="flex">
                <h3 className="font-cairoBold">رقم ولي الأمر:</h3>
                <h3 dir="ltr" className="mr-4 font-cairoRegular">
                  {data && data?.phone_number}
                </h3>
              </div>
              <div className="flex ">
                <h3 className="font-cairoBold">البريدالإلكتروني:</h3>
                <h3 className="mr-4 font-cairoRegular">
                  {data && data?.email}
                </h3>
              </div>
              <h1 className="mt-6 font-cairoBold text-[#9E9E9E]">
                المعلومات الدراسية
              </h1>
              <div className="flex">
                <h3 className="font-cairoBold">الصف:</h3>
                <h3 className="mr-4 font-cairoRegular">
                  {data && data?.Class?.name}
                </h3>
              </div>
              <div className="flex">
                <h3 className="font-cairoBold">الشعبة:</h3>
                <h3 className="mr-4 font-cairoRegular">
                  {data && data?.Division?.name}
                </h3>
              </div>
            </div>
          </div>
        )}
        {/* SECTION */}
        <div className="flex-[.7] flex-col rounded-md bg-white  mt-4 md:mt-0 md:mr-8 mx-4 md:mx-0">
          <div className="mx-8 my-6 text-md md:text-lg border-b border-blue-500 pb-4 ">
            <label
              onClick={() => setActiveTab("cv")}
              className={`${
                activeTab === "cv" && "border-b-4 border-blue-500 "
              }  pb-3 ml-8 cursor-pointer font-cairoSemiBold `}
            >
              السيرة الدراسية
            </label>
            {user?.id === data?.id && (
              <>
                <label
                  onClick={() => setActiveTab("document")}
                  className={`${
                    activeTab === "document" && "border-b-4  border-blue-500 "
                  } pb-3 ml-8 cursor-pointer font-cairoSemiBold `}
                >
                  الوثيقة
                </label>
              </>
            )}

            {user.role === "admin" && (
              <label
                onClick={() => setActiveTab("document")}
                className={`${
                  activeTab === "document" && "border-b-4  border-blue-500 "
                } pb-3 ml-8 cursor-pointer font-cairoSemiBold `}
              >
                الوثيقة
              </label>
            )}

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
