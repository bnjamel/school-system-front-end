import React from "react";
import home from "../home/home.svg";
import { Link } from "react-router-dom";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { BsArrowLeft } from "react-icons/bs";

import { CardBody, Typography } from "@material-tailwind/react";

export default function Home() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const activity = [1, 2, 3, 4];
  const stats = [
    {
      id: 1,
      number: 160,
      label: "عدد الطلاب الحالي",
      link: "student",
      Icon: PiStudentFill,
    },
    {
      id: 2,
      number: 42,
      label: "عدد الاساتذة الحالي",
      link: "teacher",
      Icon: PiChalkboardTeacherFill,
    },
    {
      id: 1,
      number: 16,
      label: "عدد الصفوف الحالي",
      link: "class",
      Icon: SiGoogleclassroom,
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <div className="h-[21rem] bg-[#5D9EEB] mt-[8rem]">
        <div className="flex justify-center items-center gap-[10rem]">
          {/* PICTURE */}
          <div>
            <img width={450} height={450} src={home} alt="home" />
          </div>

          {/* TEXT */}
          <div className="hidden lg:flex text-right text-white text-2xl ">
            <h2 className="font-cairoSemiBold leading-relaxed">
              ليس الجمال بأثوابٍ تزيننا
              <br />
              إن الجمالَ جمالُ العلم والأدبِ
            </h2>
          </div>
        </div>
      </div>
      {/* STATISTIC CARDS */}
      <div className="container mx-auto my-[2rem] flex flex-col justify-center items-center lg:flex-row-reverse gap-[4rem]">
        {/* 1 */}
        {stats.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className="w-[16rem] h-[6rem] flex rounded-lg overflow-hidden border border-black transition ease-in-out hover:scale-[1.02] cursor-pointer active:scale-[.99]"
          >
            <div className="font-cairoRegular self-center text-right m-auto flex-[.6] px-4">
              <h1 className="font-cairoBold text-2xl text-[#5D9EEB]">
                {item.number}
              </h1>
              <h3 className="text-[#666666] ">{item.label}</h3>
            </div>
            <div className="w-[6rem] h-[6rem] bg-[#091420] flex-[.4]">
              <item.Icon className="text-white p-4 w-full h-full" />
            </div>
          </Link>
        ))}
      </div>
      {/* REPORTS */}
      <div
        dir="rtl"
        className="container mx-auto items-center self-center mt-[5rem] max-w-[1000px]"
      >
        <div className="flex justify-center lg:justify-between lg:mx-[2rem]">
          <h1 className="font-cairoBold text-2xl ">أحدث التبليغات</h1>
          <Link to="/announcements">
            <h3 className="hover:underline items-center hidden lg:flex font-cairoRegular text-md cursor-pointer">
              تصفح كل التبليغات <BsArrowLeft className="mx-4" />
            </h3>
          </Link>
        </div>
        {/* CARDS */}
        <div className="flex flex-row container flex-wrap mx-auto items-center gap-2 md:gap-4  justify-center ">
          {data.map((item) => (
            <div className=" ">
              <div className="mt-6 bg-white w-[14rem]  rounded-lg overflow-hidden shadow-sm hover:shadow-md">
                <div className="h-[8rem] mx-2 mt-4 rounded-lg bg-[#47D0C8]"></div>
                <CardBody>
                  <Typography
                    variant="h5"
                    className="text-lg font-cairoSemiBold text-black"
                  >
                    عنوان التبليغ
                  </Typography>
                  <Typography className="mb-2 font-cairoRegular">
                    08/12/2023
                  </Typography>
                  <Typography className="font-cairoRegular text-sm">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.
                  </Typography>
                </CardBody>
                <Link to="/announcements/announce">
                  <div className="pt-0 mr-6 mb-6 ">
                    <button className="font-cairoRegular transition ease-in-out hover:scale-[1.06] active:scale-[.9] bg-black text-white p-2 rounded-lg text-md">
                      قراءة المزيد
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* ACTIVITY */}
        <div className="flex justify-center lg:justify-between lg:mx-[3rem] mt-[6rem] max-w-[1000px]">
          <h1 className="font-cairoBold text-2xl ">أحدث الأنشطة</h1>
          <h3 className="hover:underline items-center hidden lg:flex font-cairoRegular text-md cursor-pointer">
            تصفح كل الانشطة <BsArrowLeft className="mx-4" />
          </h3>
        </div>
        {/* ACTIVITY CARDS */}
        {/* CARDS */}
        <div className="flex flex-row container flex-wrap mx-auto items-center gap-2 md:gap-4 justify-center">
          {activity.map((item) => (
            <div className=" ">
              <div className="mt-6 bg-white w-[14rem]  rounded-lg overflow-hidden shadow-sm hover:shadow-md">
                <div className="h-[8rem] mx-2 mt-4 rounded-lg bg-[#47D0C8]"></div>
                <CardBody>
                  <Typography
                    variant="h5"
                    className="text-lg font-cairoSemiBold text-black"
                  >
                    عنوان النشاط
                  </Typography>
                  <Typography className="mb-2 font-cairoRegular">
                    08/12/2023
                  </Typography>

                  <Typography className="font-cairoRegular text-sm">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.
                  </Typography>
                </CardBody>
                <div className="pt-0 mr-6 mb-6 ">
                  <button className="font-cairoRegular transition ease-in-out hover:scale-[1.06] active:scale-[.9]  bg-black text-white p-2 rounded-lg text-md">
                    قراءة المزيد
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
