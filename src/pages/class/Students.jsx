import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import imagePlaceholder from "../../assets/images/profile.png";
import { useStateValue } from "../../context/StateProvider";

const TABLE_HEAD = ["#", "الأسم", "الصف", "رقم الهاتف"];

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

function Students({ students, isPending, studentDivision, studentClass }) {
  const [{ endpoint }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const handleTeacherPress = (id) => {
    navigate(`/student/${id}`);
  };

  return (
    <>
      {isPending ? (
        <div className="flex justify-center items-center">
          <h1 className="text-dark-500 text-[2.4rem]">يرجى الانتظار</h1>
        </div>
      ) : (
        <div>
          {/* TABLE */}
          <table
            dir="rtl"
            className="w-full min-w-max table-auto text-right rounded-lg overflow-hidden"
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
              {students &&
                students.map((item, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  return (
                    <tr
                      className={`hover:bg-gray-200 hover:scale-[1.01] transition ease-in-out ${
                        index % 2 === 0 ? "bg-light-100" : "bg-blue-100/25"
                      } cursor-pointer`}
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
                          {!item.image ? (
                            <div className="avatar">
                              <div className="w-10 ">
                                <img
                                  src={imagePlaceholder}
                                  className="rounded-full"
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="avatar">
                              <div className="w-10 ">
                                <img
                                  src={`${endpoint}images/${item?.image}`}
                                  className="w-full h-full object-cover"
                                  alt=""
                                />
                              </div>
                            </div>
                          )}
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
                          <p>صف ال{studentClass}</p>
                          <p className="text-[#58585a]">
                            شعبة {studentDivision}
                          </p>
                        </div>
                      </td>

                      <td
                        onClick={() => handleTeacherPress(item?.id)}
                        className={classes}
                      >
                        <p>{item?.phone_number}</p>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Students;
