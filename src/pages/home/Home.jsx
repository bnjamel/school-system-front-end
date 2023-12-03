import React, { useEffect, useState } from "react";
import home from "../home/home.svg";
import { Link } from "react-router-dom";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { BsArrowLeft } from "react-icons/bs";

import { CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";
import useFetch from "../../customHooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [numberOfTeachers, setNumberOfTeachers] = useState(0);
  const [numberOfClasses, setNumberOfClasses] = useState(0);
  const [eventAnnouncements, setEventAnnouncements] = useState([]);
  const navigate = useNavigate();

  const { data, isPending, error } = useFetch(
    "http://localhost:3001/announcement"
  );

  useEffect(() => {
    axios
      .get("http://localhost:3001/student/")
      .then((response) => {
        if (response.data.error) {
          console.log("Something went wrong", response.data.error);
        } else {
          setNumberOfStudents(response.data.length);
        }
      })
      .catch((error) => {
        console.log("Something went wrong");
      });

    axios
      .get("http://localhost:3001/teacher/")
      .then((response) => {
        if (response.data.error) {
          console.log("Something went wrong", response.data.error);
        } else {
          setNumberOfTeachers(response.data.length);
        }
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });

    axios
      .get("http://localhost:3001/class/")
      .then((response) => {
        if (response.data.error) {
          console.log("Something went wrong", response.data.error);
        } else {
          setNumberOfClasses(response.data.length);
        }
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });

    let type = "نشاط";

    axios
      .get(`http://localhost:3001/announcement/byType/${type}`)
      .then((response) => {
        if (response.data.error) {
          console.log("Something went wrong", response.data.error);
        } else {
          setEventAnnouncements(response.data.slice(0, 4));
        }
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, []);

  const stats = [
    {
      id: 1,
      number: numberOfStudents ? numberOfStudents : 0,
      label: "عدد الطلاب الحالي",
      link: "student",
      Icon: PiStudentFill,
    },
    {
      id: 2,
      number: numberOfTeachers ? numberOfTeachers : 0,
      label: "عدد الاساتذة الحالي",
      link: "teacher",
      Icon: PiChalkboardTeacherFill,
    },
    {
      id: 3,
      number: numberOfClasses ? numberOfClasses : 0,
      label: "عدد الصفوف الحالي",
      link: "class",
      Icon: SiGoogleclassroom,
    },
  ];

  const handleAnnounceClick = (id) => {
    navigate(`/announcements/${id}`);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <div className="h-[25rem] mt-[8rem] bg-gradient">
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
            className="p-1 bg-gradient rounded-lg overflow-hidden transition ease-in-out hover:scale-[1.02] z-[1] cursor-pointer active:scale-[.99]"
          >
            <div className="w-[16rem]  h-[6rem] flex rounded-lg overflow-hidden">
              <div className="font-cairoRegular bg-white h-full justify-center  flex flex-col text-right m-auto flex-[.6] px-4">
                <h1 className="font-cairoBold text-2xl text-[#5D9EEB]">
                  {item.number ? item?.number : "..."}
                </h1>
                <h3 className="text-[#666666 ">{item.label}</h3>
              </div>
              <div className="w-[6rem] h-[6rem]  flex-[.4]">
                <item.Icon className="text-white p-4 w-full h-full" />
              </div>
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
          {isPending ? (
            <div className="w-full justify-center flex items-center py-12">
              <h1 className="text-dark-100 text-[2rem]">يرجى الانتظار</h1>
            </div>
          ) : (
            data.slice(0, 8).map((item) => (
              <div
                key={item?.id}
                className="cursor-pointer"
                onClick={() => handleAnnounceClick(item?.id)}
              >
                <div className="item-shadow mt-6 bg-white w-[14rem]  rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-gray-300/50 hover:border-gray-500">
                  <div className="h-[8rem] mx-2 mt-4 rounded-lg bg-[#47D0C8]"></div>
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
                    <Typography className="mb-2 font-cairoRegular">
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
                  <Link to={`/announcements/${item?.id}`}>
                    <div className="pt-0 mr-6 mb-6 ">
                      <button className="font-cairoRegular transition ease-in-out hover:scale-[1.06] active:scale-[.9] bg-dark-500 text-white p-2 rounded-lg text-md">
                        قراءة المزيد
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
        {/* ACTIVITY */}
        <div className="flex justify-center lg:justify-between lg:mx-[3rem] mt-[6rem] max-w-[1000px]">
          <h1 className="font-cairoBold text-2xl ">أحدث الأنشطة</h1>
        </div>
        {/* ACTIVITY CARDS */}
        {/* CARDS */}
        <div className="flex flex-row container flex-wrap mx-auto items-center gap-2 md:gap-4 justify-center">
          {!eventAnnouncements ? (
            <div className="w-full justify-center flex items-center py-12">
              <h1 className="text-dark-100 text-[2rem]">يرجى الانتظار</h1>
            </div>
          ) : (
            eventAnnouncements &&
            eventAnnouncements.map((item) => (
              <div
                key={item?.id}
                className="cursor-pointer"
                onClick={() => handleAnnounceClick(item?.id)}
              >
                <div className="item-shadow mt-6 bg-white w-[14rem]  rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-gray-300/50 hover:border-gray-500">
                  <div className="h-[8rem] mx-2 mt-4 rounded-lg bg-[#47D0C8]"></div>
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
                    <Typography className="mb-2 font-cairoRegular">
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
                  <Link to={`/announcements/${item?.id}`}>
                    <div className="pt-0 mr-6 mb-6 ">
                      <button className="font-cairoRegular transition ease-in-out hover:scale-[1.06] active:scale-[.9]  bg-dark-500 text-white p-2 rounded-lg text-md">
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
  );
}
