import React from "react";
import { CardBody, Typography } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { BiDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Announcements() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <div className="mx-auto max-w-[1000px] flex flex-col pt-[12rem]">
        {/* REPORTS */}
        <div dir="rtl" className="container mx-auto items-center self-center  ">
          <div className="flex justify-center lg:justify-between lg:mx-[1rem] xl:mx-[2rem] items-center flex-col md:flex-row ">
            <h1 className="font-cairoBold text-2xl md:mx-6 lg:mx-0 mb-2 md:mb-0">
              التبليغات
            </h1>
            <div dir="rtl" className="flex">
              <Link
                to="/announcements/newannounce"
                className="hidden transition ease-in-out hover:scale-[1.04] active:scale-[.99] md:flex px-3 py-1.5 rounded-md text-white font-cairoRegular bg-[#5B91D0] ml-4 "
              >
                إضافة تبليغ +
              </Link>

              {/* SELECT */}
              <div className="flex flex-col items-start font-cairoRegular ">
                <select className="w-20 rounded-md text-black/50 border border-gray-500/50 focus:border-black/50 transition ease-in-out px-2  cursor-pointer">
                  <option value="عام">عام</option>
                  <option value="نشاط">نشاط</option>

                  <option value="امتحان">امتحان</option>
                  <option value="ضروري">ضروري</option>
                </select>
              </div>
            </div>
          </div>
          {/* CARDS */}
          <div className="flex flex-row container flex-wrap mx-auto items-center lg:gap-4 justify-center">
            {data.map((item) => (
              <div className=" ">
                <div className="mt-6 bg-white w-[14rem]  rounded-lg overflow-hidden shadow-sm hover:shadow-md">
                  <div className="h-[8rem] mx-2 mt-4 rounded-lg bg-[#47D0C8] "></div>
                  <CardBody>
                    <Typography
                      variant="h5"
                      className="text-lg font-cairoSemiBold text-black"
                    >
                      عنوان التبليغ
                    </Typography>
                    <Typography className="font-cairoRegular">
                      08/12/2023
                    </Typography>
                    <Typography className="font-cairoRegular text-sm">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.
                    </Typography>
                  </CardBody>
                  <Link to="/announcements/announce">
                    <div className="pt-0 mr-6 mb-4 ">
                      <button className="font-cairoRegular transition ease-in-out hover:scale-[1.06] active:scale-[.9] bg-black text-white p-2 rounded-lg text-md">
                        قراءة المزيد
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
