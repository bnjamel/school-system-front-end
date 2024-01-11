import React, { useState } from "react";
import Announce from "../../pages/profile/teacherProfile/Announce";
import Thanks from "../../pages/profile/teacherProfile/Thanks";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import { FiEdit } from "react-icons/fi";
import { useStateValue } from "../../context/StateProvider";
import imagePlaceholder from "../../assets/images/profile.png";

export default function ViewTeacherProfile() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("announce");
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const { data, isPending, error } = useFetch(
    `http://localhost:3001/teacher/byId/${id}`,
    "GET",
    null
  );

  const activeDiv = () => {
    if (data) {
      switch (activeTab) {
        case "announce":
          return <Announce id={id} />;

        case "thanks":
          return <Thanks thanks={data.Appreciation_Books} id={id} />;

        default:
          return;
      }
    }
  };

  const handleTeacherEdit = (id) => {
    navigate(`/profile/teacheredit/${id}`);
  };

  return (
    <div dir="rtl" className="mx-auto max-w-[1200px] flex pt-[12rem]  ">
      <div className="flex w-full flex-col md:flex-row justify-center md:justify-normal mx-auto md:mx-0 ">
        {/* Profile side */}
        <div className="bg-white rounded-md p-8 flex-[.3] flex-col mx-4 md:mx-auto">
          <div className="flex flex-col items-center justify-center">
            {data?.image ? (
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
                  onClick={() => handleTeacherEdit(data?.id)}
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
                    onClick={() => handleTeacherEdit(data?.id)}
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
            <h1 className="self-center text-2xl font-cairoBold my-4 flex items-center">
              أ. {data && data?.name}
            </h1>
          </div>
          <div className="border-l border border-black" />
          {/* details */}
          <div className="my-6">
            <h1 className="font-cairoBold text-[#9E9E9E]">معلومات شخصية</h1>
            <div className="flex">
              <h3 className="font-cairoBold">تاريخ الميلاد:</h3>
              <h3 className="mr-4 font-cairoRegular">
                {data && data?.birthdate}
              </h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">الجنس:</h3>
              <h3 className="mr-4 font-cairoRegular">{data && data?.gender}</h3>
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
              <h3 className="font-cairoBold">البريدالإلكتروني:</h3>
              <h3 className="mr-4 font-cairoRegular">{data && data?.email}</h3>
            </div>
            <h1 className="mt-6 font-cairoBold text-[#9E9E9E]">
              معلومات مهنية
            </h1>
            <div className="flex">
              <h3 className="font-cairoBold">الشهادة:</h3>
              <h3 className="mr-4 font-cairoRegular">{data && data?.degree}</h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">سنوات الخبرة:</h3>
              <h3 className="mr-4 font-cairoRegular">
                {data && data?.experience} سنوات
              </h3>
            </div>
            <div className="flex">
              <h3 className="font-cairoBold">الصفوف التي يدرسها:</h3>
              <h3 className="mr-4 font-cairoRegular">الأول, الثاني</h3>
            </div>
          </div>
        </div>
        {/* Thanks + announce */}
        <div className="flex-[.7] flex-col rounded-md bg-white overflow-hidden mt-4 md:mt-0 md:mr-8 mx-4 md:mx-0 ">
          <div className="px-6 mt-6 text-md md:text-lg border-b border-blue-500 pb-4 ">
            <label
              onClick={() => setActiveTab("announce")}
              className={`${
                activeTab === "announce" && "border-b-4 border-blue-500 "
              } pb-3 ml-4 cursor-pointer font-cairoSemiBold `}
            >
              التبليغات{" "}
            </label>

            <label
              onClick={() => setActiveTab("thanks")}
              className={`${
                activeTab === "thanks" && "border-b-4  border-blue-500 "
              } pb-3 cursor-pointer font-cairoSemiBold `}
            >
              كتب الشكر{" "}
            </label>
          </div>
          {/* CALLING */}
          <div>{activeDiv(activeTab)}</div>
        </div>
      </div>
    </div>
  );
}
