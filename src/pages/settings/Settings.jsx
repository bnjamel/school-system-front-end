import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { PiChalkboardTeacherFill } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { TfiAnnouncement } from "react-icons/tfi";
import { CiEdit } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

import EditAdminProfile from "../settings/EditAdminProfile.jsx";
import AddAdmin from "../settings/AddAdmin.jsx";
import SendEmail from "../settings/SendEmail.jsx";
import PendingRequests from "./PendingRequests.jsx";
import axios from "axios";

export default function Settings() {
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const [numberOfTeachers, setNumberOfTeachers] = useState(0);
  const [numberOfClasses, setNumberOfClasses] = useState(0);
  const [numberOfAnnouncements, setNumberOfAnnouncements] = useState(0);
  const [requests, setRequests] = useState();

  const getPendingRequests = async () => {
    await axios
      .get("http://localhost:3001/pending/")
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPendingRequests();
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

    axios
      .get(`http://localhost:3001/announcement/`)
      .then((response) => {
        if (response.data.error) {
          console.log("Something went wrong", response.data.error);
        } else {
          setNumberOfAnnouncements(response.data.length);
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
      link: "/student",
      Icon: PiStudentFill,
      image: "src/assets/images/waves.png",
    },
    {
      id: 2,
      number: numberOfTeachers ? numberOfTeachers : 0,
      label: "عدد الاساتذة الحالي",
      link: "/teacher",
      Icon: PiChalkboardTeacherFill,
      image: "src/assets/images/waves.png",
    },
    {
      id: 3,
      number: numberOfClasses ? numberOfClasses : 0,
      label: "عدد الصفوف الحالي",
      link: "/class",
      Icon: SiGoogleclassroom,
      image: "src/assets/images/waves.png",
    },
    {
      id: 4,
      number: numberOfAnnouncements ? numberOfAnnouncements : 0,
      label: "عدد التبليغات",
      link: "/announcements",
      Icon: TfiAnnouncement,
      image: "src/assets/images/waves.png",
    },
  ];

  const [activeTab, setActiveTab] = useState("editAdminProfile");
  const activeDiv = () => {
    switch (activeTab) {
      case "editAdminProfile":
        return <EditAdminProfile />;

      case "addAdmin":
        return <AddAdmin />;

      case "sendEmail":
        return <SendEmail />;

      case "pendingRequests":
        return <PendingRequests />;

      default:
        return;
    }
  };

  const tabs = [
    {
      id: 1,
      name: "editAdminProfile",
      label: "تعديل الملف الشخصي",
      Icon: CiEdit,
    },
    {
      id: 2,
      name: "addAdmin",
      label: "اضافة ادمن",
      Icon: FiUserPlus,
    },
    {
      id: 3,
      name: "sendEmail",
      label: "ارسال تنبيه للكل عبر الايميل",
      Icon: MdOutlineEmail,
    },
    {
      id: 4,
      name: "pendingRequests",
      label: "طلبات تسجيل",
      Icon: MdOutlineEmail,
    },
  ];

  const Badge = () => {
    return (
      <div className="mr-2 w-6 h-6 flex justify-center items-center rounded-full bg-red-500">
        {requests && (
          <>
            {requests.length >= 0 && (
              <p className="text-white font-cairoBold">
                {requests.length > 9 ? "9+" : requests?.length}
              </p>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-[1000px] flex flex-col pt-[12rem]">
      {/* STATISTIC CARDS */}
      <div className="container mx-auto my-[2rem] flex flex-col justify-center items-center lg:flex-row-reverse gap-4">
        {/* 1 */}
        {stats.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className="shadow hover:shadow-md bg-gradient rounded-lg overflow-hidden transition ease-in-out z-[1] cursor-pointer "
          >
            <div className="w-[14rem] relative h-[6rem] flex rounded-lg overflow-hidden">
              <div className="font-cairoRegular h-full justify-center flex flex-col text-right m-auto flex-[.6] px-4">
                <h1 className="font-cairoBold text-2xl">{item.number}</h1>
                <h3 className=" z-10 text-sm font-cairoRegular">
                  {item.label}
                </h3>
              </div>
              <div className="w-[6rem] h-[6rem] z-10 flex-[.4]">
                <item.Icon className="text-white p-4 w-full h-full " />
              </div>
              <div className="absolute top-14  opacity-40">
                <img src={item.image} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* THE REST */}
      {/* SECTION */}
      <div
        dir="rtl"
        className="flex-[.7] flex-col rounded-md bg-white  mt-4 md:mt-0 md:mr-8 mx-4 md:mx-0"
      >
        <div className="mx-8 my-6 text-xs md:text-sm border-b border-blue-500 flex gap-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.name)}
              className={`${
                activeTab === tab.name && "border-b-4 border-blue-500 "
              } flex items-center justify-center pb-3 cursor-pointer font-cairoSemiBold `}
            >
              <tab.Icon className="text-xl ml-2" />
              <h1 className="hidden md:block">{tab.label}</h1>
              {tab.name === "pendingRequests" && <Badge />}
            </div>
          ))}
        </div>
        {/* CALLING */}
        <div>{activeDiv(activeTab)}</div>
      </div>
    </div>
  );
}
