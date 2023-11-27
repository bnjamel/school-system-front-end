import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
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

function Students() {
  return (
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
          {TABLE_ROWS.map(({ img, name, email, subject, org, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr
                className={`hover:bg-gray-200 hover:scale-[1.01] transition ease-in-out ${
                  index % 2 === 0 ? "bg-light-100" : "bg-blue-100/25"
                } cursor-pointer`}
                key={name}
              >
                <td>
                  <div className="flex pr-4 flex-col">{index + 1}</div>
                </td>
                <td className={classes}>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-10 ">
                        <img src={img} className=" rounded-full" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p>{name}</p>
                      <p className="text-blue-gray-400">{email}</p>
                    </div>
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex flex-col">
                    <p>{subject}</p>
                    <p className="text-[#58585a]">{org}</p>
                  </div>
                </td>

                <td className={classes}>
                  <p>{date}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
