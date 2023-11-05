import React from "react";
import home from "../home/home.svg";

import { CardBody, Typography } from "@material-tailwind/react";

export default function Home() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const activity = [1, 2, 3, 4];
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
      <div className="container mx-auto my-[2rem] flex flex-col justify-center items-center lg:flex-row gap-[4rem]">
        {/* 1 */}
        <div className="w-[16rem] h-[6rem] rounded-lg  border border-black flex justify-between ">
          <div className="font-cairoRegular self-center text-right m-auto">
            <h1 className="font-cairoBold text-2xl text-[#5D9EEB]">16</h1>
            <h3 className="text-[#666666] ">عدد الصفوف الحالي</h3>
          </div>
          <div className="w-[6rem] h-[6rem] rounded-r-lg bg-[#091420]"></div>
        </div>
        {/* 2 */}
        <div className="w-[16rem] h-[6rem] rounded-lg  border border-black flex justify-between ">
          <div className="font-cairoRegular self-center text-right m-auto">
            <h1 className="font-cairoBold text-2xl text-[#5D9EEB]">42</h1>
            <h3 className="text-[#666666] ">عدد الأساتذة الحالي</h3>
          </div>
          <div className="w-[6rem] h-[6rem] rounded-r-lg bg-[#091420]"></div>
        </div>
        {/* 3 */}
        <div className="w-[16rem] h-[6rem] rounded-lg  border border-black flex justify-between ">
          <div className="font-cairoRegular self-center text-right m-auto">
            <h1 className="font-cairoBold text-2xl text-[#5D9EEB]">160</h1>
            <h3 className="text-[#666666] ">عدد الطلاب الحالي</h3>
          </div>
          <div className="w-[6rem] h-[6rem] rounded-r-lg bg-[#091420]"></div>
        </div>
      </div>
      {/* REPORTS */}
      <div
        dir="rtl"
        className="container mx-auto items-center self-center my-[5rem] "
      >
        <div className="flex justify-center lg:justify-between lg:mx-[10rem]">
          <h1 className="font-cairoBold text-2xl ">أحدث التبليغات</h1>
          <h3 className="hidden lg:flex font-cairoRegular underline text-md cursor-pointer">
            تصفح كل التبليغات&larr;
          </h3>
        </div>
        {/* CARDS */}
        <div className="flex flex-row container flex-wrap mx-auto items-center lg:gap-8 justify-center">
          {data.map((item) => (
            <div className=" ">
              <div className="mt-6 bg-white w-[18rem]  rounded-lg overflow-hidden shadow-sm hover:shadow-md">
                <div className="h-56 mx-2 mt-2 rounded-lg bg-[#47D0C8]"></div>
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
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا
                  </Typography>
                </CardBody>
                <div className="pt-0 mr-6 mb-6 ">
                  <button className="font-cairoRegular  bg-black text-white p-2 rounded-lg text-md">
                    قراءة المزيد
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ACTIVITY */}
        <div className="flex justify-center lg:justify-between lg:mx-[10rem] mt-[5rem]">
          <h1 className="font-cairoBold text-2xl ">أحدث الأنشطة</h1>
        </div>
        {/* ACTIVITY CARDS */}
        {/* CARDS */}
        <div className="flex flex-row container flex-wrap mx-auto items-center lg:gap-8 justify-center">
          {activity.map((item) => (
            <div className=" ">
              <div className="mt-6 bg-white w-[18rem]  rounded-lg overflow-hidden shadow-sm hover:shadow-md">
                <div className="h-56 mx-2 mt-2 rounded-lg bg-[#47D0C8]"></div>
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
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذه
                  </Typography>
                </CardBody>
                <div className="pt-0 mr-6 mb-6 ">
                  <button className="font-cairoRegular  bg-black text-white p-2 rounded-lg text-md">
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
