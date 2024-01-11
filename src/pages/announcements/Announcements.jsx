import React, { useEffect, useState } from "react";
import { CardBody, Typography } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { BiDownArrow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../../context/StateProvider";
import { TfiAnnouncement } from "react-icons/tfi";

export default function Announcements() {
  const [{ user }, dispatch] = useStateValue();
  const [type, setType] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const handleAnnounceClick = (id) => {
    navigate(`/announcements/${id}`);
  };

  useEffect(() => {
    if (type) {
      axios
        .get(`http://localhost:3001/announcement/byType/${type}`)
        .then((response) => {
          setAnnouncements(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`http://localhost:3001/announcement/`)
        .then((response) => {
          setAnnouncements(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [type]);

  // const data = [1, 2, 3, 4, 5, 6, 7, 8];
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
              {user.role !== "student" && (
                <Link
                  to="/announcements/newannounce"
                  className="hidden transition ease-in-out hover:scale-[1.04] active:scale-[.99] md:flex px-3 py-1.5 rounded-md text-white font-cairoRegular bg-[#5B91D0] ml-4 "
                >
                  إضافة تبليغ +
                </Link>
              )}

              {/* SELECT */}
              <div className="flex flex-col items-start font-cairoRegular ">
                <select
                  value={type}
                  onChange={(e) => handleChange(e)}
                  className=" rounded-md text-black/50 border border-gray-500/50 focus:border-black/50 transition ease-in-out px-2  cursor-pointer"
                >
                  <option value="">الكل</option>
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
            {announcements.length <= 0 ? (
              <div className="w-full justify-center flex items-center py-12">
                <h1 className="text-dark-100 text-[2rem]">لا توجد تبليغات</h1>
              </div>
            ) : (
              announcements.map((item) => (
                <div
                  key={item?.id}
                  className="cursor-pointer"
                  onClick={() => handleAnnounceClick(item.id)}
                >
                  <div className="mt-6 bg-white w-[14rem] px-2 rounded-lg overflow-hidden shadow-sm hover:shadow-md">
                    {!item.cover ? (
                      <div className="h-[8rem] mx-2 mt-4 rounded-lg bg-gradient flex justify-center items-center">
                        <TfiAnnouncement className="text-white p-6 w-full h-full" />
                      </div>
                    ) : (
                      <div className="h-full mt-4 w-full rounded-lg overflow-hidden ">
                        <img
                          src={"http://localhost:3001/images/" + item?.cover}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                    )}
                    <CardBody>
                      <Typography
                        variant="h5"
                        className="text-lg font-cairoSemiBold text-black"
                      >
                        {item?.title?.length > 18 ? (
                          <>{item.title.slice(0, 18)}...</>
                        ) : (
                          <>{item.title}</>
                        )}
                      </Typography>
                      <Typography className="font-cairoRegular">
                        {item?.createdAt.slice(0, 10)}
                      </Typography>
                      <Typography className="font-cairoRegular text-sm">
                        {item?.body?.length > 20 ? (
                          <>{item.body.slice(0, 20)}...</>
                        ) : (
                          <>{item.body}</>
                        )}
                      </Typography>
                    </CardBody>
                    <Link to={`/announcements/${item.id}`}>
                      <div className="pt-0 mr-6 mb-4 ">
                        <button className="font-cairoRegular transition ease-in-out hover:scale-[1.06] active:scale-[.9] bg-black text-white p-2 rounded-lg text-md">
                          قراءة المزيد
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
