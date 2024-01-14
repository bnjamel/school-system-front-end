import React, { useEffect, useState } from "react";
import { FaRegWindowRestore } from "react-icons/fa";
import { FiEdit, FiRewind, FiWind } from "react-icons/fi";
const TABLE_HEAD = ["#", "الأسم", "الصف", "رقم الهاتف", ""];
import axios from "axios";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../../assets/images/profile.png";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
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

export default function PendingRequests() {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState();
  const [noRequestsError, setNoRequestsError] = useState("");
  const [{ endpoint }] = useStateValue();
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);

  // Form Controllers
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const getPendingRequests = async () => {
    await axios
      .get(`${endpoint}pending/`)
      .then((response) => {
        if (response.data.error) {
          setNoRequestsError(response.data.error);
        } else {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPendingRequests();
  }, []);

  const onPendingClick = (request) => {
    setSelectedRequest(request);
    // console.log(request);
    handleOpen();
    // navigate();
  };

  const addStudent = async (data) => {
    const info = {
      birthdate: selectedRequest.birthdate,
      email: data.email,
      password: data.password,
      gender: selectedRequest.gender,
      location: selectedRequest.location,
      name: selectedRequest.name,
      parent: selectedRequest.parent,
      phone_number: selectedRequest.phone_number,
      ClassId: selectedRequest.ClassId,
      DivisionId: selectedRequest.DivisionId,
      image: selectedRequest.image,
      identification_card: selectedRequest.identification_card,
      residence_card: selectedRequest.residence_card,
      document: selectedRequest.student_document_image,
    };
    console.log(info);

    axios
      .post(`${endpoint}student/acceptrequest`, info)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .delete(`${endpoint}pending/${selectedRequest.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    handleOpen();
    window.location.reload();
  };

  return (
    <div dir="rtl" className="mx-auto">
      {/* FORM */}
      <h2 className="pr-6 pb-2 text-blue-gray-400 font-cairoSemiBold">
        طلبات تسجيل جديدة
      </h2>

      {/* Modal */}
      <Dialog
        open={open}
        handler={handleOpen}
        className="max-h-[90vh] overflow-y-scroll hide-scrollbar"
      >
        <DialogHeader>
          <div dir="rtl" className="flex justify-start w-full">
            <h1>تسجيل طالب جديد</h1>
          </div>
        </DialogHeader>
        <DialogBody>
          {/* Pic */}
          <div className="flex flex-col justify-center mt-6 items-center">
            {selectedRequest?.image ? (
              <div className="avatar">
                <div className="">
                  <img
                    width={150}
                    height={150}
                    src={`${endpoint}images/` + selectedRequest?.image}
                    className=" rounded-full"
                  />
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
                </div>
              </>
            )}
            <h2 className="font-cairoBold text-md mt-2">
              {selectedRequest?.name}
            </h2>
          </div>

          {/* Details */}
          <div dir="rtl" className="mt-8">
            <div className="">
              <h3 className="font-cairoSemiBold">البريد الالكتروني</h3>
              <p className="text-[#333333]">{selectedRequest?.email}</p>
            </div>
            <div className="my-2">
              <h3 className="font-cairoSemiBold">ولي امر الطالب</h3>
              <p className="text-[#333333]">{selectedRequest?.parent}</p>
            </div>
            <div className="my-2">
              <h3 className="font-cairoSemiBold">رقم الهاتف</h3>
              <p className="text-[#333333]">{selectedRequest?.phone_number}</p>
            </div>
            <div className="">
              <h3 className="font-cairoSemiBold">تاريخ الميلاد</h3>
              <p className="text-[#333333]">{selectedRequest?.birthdate}</p>
            </div>
            <div className="my-2">
              <h3 className="font-cairoSemiBold">العنوان</h3>
              <p className="text-[#333333]">{selectedRequest?.location}</p>
            </div>
            <div
              dir="rtl"
              className="text-gray-900  border-gray-200 px-8 rounded"
            >
              <label
                htmlFor="image"
                // className="cursor-pointer w-full hover:opacity-80"
                className={`transition bg-white border rounded-md overflow-hidden w-full h-[10rem] flex flex-col justify-center items-center`}
              >
                <img
                  src={
                    `${endpoint}images/` +
                    selectedRequest?.student_document_image
                  }
                  // className="img w-[50px] h-[50px] object-contain"
                  className="w-full h-full object-cover"
                />
              </label>
            </div>

            <div className="my-2">
              <CustomInput
                control={control}
                name={"email"}
                placeholder={"البريد الالكتروني"}
                type={"email"}
                rules={{
                  required: "الرجاء إدخال البريد الالكتروني",
                }}
              />
            </div>
            <div className="my-2">
              <CustomInput
                control={control}
                name={"password"}
                placeholder={"كلمة المرور"}
                type={"password"}
                rules={{
                  required: "الرجاء إدخال كلمة المرور",
                }}
              />{" "}
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span className="font-cairoBold">الغاء</span>
          </Button>
          <Button
            variant="gradient"
            color="purple"
            onClick={handleSubmit(addStudent)}
          >
            <span className="font-cairoBold">تسجيل</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <section class="px-6 h-[600px] hide-scrollbar overflow-y-scroll dark:bg-gray-800 mb-6 font-cairoRegular">
        <table
          dir="rtl"
          className="mt-[2rem] w-full table-auto text-right rounded-lg overflow-hidden"
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
          {noRequestsError ? (
            <></>
          ) : (
            <tbody>
              {data &&
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
                      key={Math.random()}
                    >
                      <td onClick={() => onPendingClick(item)}>
                        <div className="flex pr-4 flex-col">{index + 1}</div>
                      </td>
                      <td
                        onClick={() => onPendingClick(item)}
                        className={classes}
                      >
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="w-10 ">
                              <img
                                src={
                                  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
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
                        onClick={() => onPendingClick(item)}
                        className={classes}
                      >
                        <div className="flex flex-col">
                          <p>صف الثالث</p>
                          <p className="text-[#58585a]">شعبة أ</p>
                        </div>
                      </td>

                      <td
                        onClick={() => onPendingClick(item)}
                        className={classes}
                      >
                        <p>{item?.phone_number}</p>
                      </td>

                      <td>
                        <FaRegWindowRestore
                          size={20}
                          className="cursor-pointer hover:scale-[1.1] transition"
                          onClick={() => onPendingClick(item)}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          )}
        </table>
        {noRequestsError && (
          <div className="w-full flex justify-center my-12 items-center flex-col">
            <h1 className="text-black text-[2.2rem] ">
              لا توجد طلبات تسجيل جديدة
            </h1>
          </div>
        )}
      </section>
    </div>
  );
}
