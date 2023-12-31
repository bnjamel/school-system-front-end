import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
const TABLE_HEAD = ["#", "الأسم", "الصف", "رقم الهاتف", ""];
import { FiEdit } from "react-icons/fi";
import useFetch from "../../customHooks/useFetch";
import axios from "axios";
import { useStateValue } from "../../context/StateProvider";

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "حسن عبد الله",
    email: "hasan@student.com",
    subject: "الخامس العلمي",
    org: "شعبة أ",
    date: "0123456789",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "حسن عبد الله",
    email: "hasan@student.com",
    subject: "الخامس العلمي",
    org: "شعبة أ",
    date: "0123456789",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "حسن عبد الله",
    email: "hasan@student.com",
    subject: "الخامس العلمي",
    org: "شعبة أ",
    date: "0123456789",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "حسن عبد الله",
    email: "hasan@student.com",
    subject: "الخامس العلمي",
    org: "شعبة أ",
    date: "0123456789",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "حسن عبد الله",
    email: "hasan@student.com",
    subject: "الخامس العلمي",
    org: "شعبة أ",
    date: "0123456789",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "حسن عبد الله",
    email: "hasan@student.com",
    subject: "الخامس العلمي",
    org: "شعبة أ",
    date: "0123456789",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "حسن عبد الله",
    email: "hasan@student.com",
    subject: "الخامس العلمي",
    org: "شعبة أ",
    date: "0123456789",
  },
];
export default function Student() {
  const [{ user }, dispatch] = useStateValue();

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    if (!searchTerm) {
      axios
        .get("http://localhost:3001/student/")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchTerm]);

  const handleTeacherPress = (id) => {
    navigate(`/student/${id}`);
  };

  const handleStudentEdit = () => {
    navigate("/profile/studentedit");
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    const item = data.filter((student) => student.name.startsWith(term));
    setData(item);
  };

  return (
    <div dir="rtl" className="mx-auto max-w-[1000px] flex flex-col pt-[12rem]">
      {/* TEACHER */}
      <h1 className="font-cairoRegular text-2xl text-[#999999]">الطلاب</h1>
      {/* SEARCH + BUTTON */}
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <label htmlFor="Search" className="sr-only"></label>

          <input
            type="text"
            id="Search"
            placeholder="ابحث عن طالب..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-[16rem] font-cairoRegular pr-4 mt-1 rounded-md border-gray-200 py-2.5 shadow-sm sm:text-sm"
          />
          <div
            onClick={() => handleSearch(searchTerm)}
            className="mr-1 transition ease-in-out hover:scale-[1.06] active:scale-[.9] px-[15px] py-[10px] mt-1 cursor-pointer rounded-md  bg-[#5B91D0]"
          >
            <BsSearch className="text-white" />
          </div>
        </div>
        {/* BUTTON */}
        {user.role === "admin" && (
          <Link
            to="/student/newstudent"
            className="hidden transition ease-in-out hover:scale-[1.06] active:scale-[.9] md:flex px-3 py-1.5 rounded-md text-white font-cairoRegular bg-[#5B91D0]"
          >
            إضافة طالب +
          </Link>
        )}
      </div>
      {/* TABLE */}
      <table
        dir="rtl"
        className="mt-[2rem] w-full min-w-max table-auto text-right rounded-lg overflow-hidden"
      >
        <thead className="">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                dir="rtl"
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50/50 p-4 "
              >
                <h2 className="">{head}</h2>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data ? (
            data.map((item, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              return (
                <tr
                  className={`hover:bg-gray-200 hover:scale-[1.01] transition ease-in-out  ${
                    index % 2 === 0 ? "bg-light-100" : "bg-blue-100/25"
                  } cursor-pointer `}
                  key={item?.id}
                >
                  <td onClick={() => handleTeacherPress(item?.id)}>
                    <div className="flex pr-4 flex-col">{index + 1}</div>
                  </td>
                  <td
                    onClick={() => handleTeacherPress(item?.id)}
                    className={classes}
                  >
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-10 ">
                          <img
                            src={
                              item?.image
                                ? item?.image
                                : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                            }
                            className=" rounded-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <p>{item?.name}</p>
                        <p className="text-blue-gray-400">{item?.email}</p>
                      </div>
                    </div>
                  </td>
                  <td
                    onClick={() => handleTeacherPress(item?.id)}
                    className={classes}
                  >
                    <div className="flex flex-col">
                      <p>صف ال{item?.Class.name}</p>
                      <p className="text-[#58585a]">
                        شعبة {item?.Division.name}
                      </p>
                    </div>
                  </td>

                  <td
                    onClick={() => handleTeacherPress(item?.id)}
                    className={classes}
                  >
                    <p>{item?.phone_number}</p>
                  </td>

                  <td>
                    <FiEdit
                      size={20}
                      className="cursor-pointer hover:scale-125 transition"
                      onClick={handleStudentEdit}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <>No data</>
          )}
        </tbody>
      </table>
    </div>
  );
}
