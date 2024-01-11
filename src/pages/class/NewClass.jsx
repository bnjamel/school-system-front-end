import { Button } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const classOptions = [
//   {
//     id: 1,
//     label: "اول",
//     value: "اول",
//   },
//   {
//     id: 2,
//     label: "ثاني",
//     value: "ثاني",
//   },
//   {
//     id: 3,
//     label: "ثالث",
//     value: "ثالث",
//   },
//   {
//     id: 4,
//     label: "رابع",
//     value: "رابع",
//   },
//   {
//     id: 5,
//     label: "خامس",
//     value: "خامس",
//   },
//   {
//     id: 6,
//     label: "سادس",
//     value: "سادس",
//   },
// ];

function NewClass() {
  const [classList, setClassList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/class")
      .then((res) => {
        setClassList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Form Controllers
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    const selectedClass = classList.find((clas) => clas.name === data.class);

    const info = {
      classId: selectedClass.id,
      name: data?.division,
    };

    axios
      .post("http://localhost:3001/division/", info)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/class");
  };

  return (
    <div
      dir="rtl"
      className="mx-auto max-w-[1000px] flex flex-col pt-[12rem] px-8 md:px-0"
    >
      <h1 className="pb-4 font-cairoBold text-lg text-[#999999] w-full md:w-[60%] self-center">
        إضافة صف جديد
      </h1>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-6 font-cairoRegular w-full md:w-[60%] py-8 px-8 self-center">
        {/* FORM */}
        <form>
          <div className="grid grid-cols-1 gap-6  ">
            <CustomInput
              control={control}
              name={"class"}
              placeholder={"الصف"}
              type={"select"}
              options={classList}
              rules={{
                required: "الرجاء ادخال الصف",
              }}
            />
            <CustomInput
              control={control}
              name={"division"}
              type={"text"}
              placeholder={"اسم الشعبة"}
              rules={{
                required: "الرجاء ادخال اسم الشعبة",
              }}
            />
          </div>
        </form>
      </section>
      {/* BUTTONS */}
      <div className="flex justify-between w-full md:w-[60%] self-center">
        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="font-cairoBold text-sm bg-blue-500"
        >
          إضافة
        </Button>
        <Link to="/class">
          <Button className="font-cairoBold text-sm">رجوع</Button>
        </Link>
      </div>
    </div>
  );
}

export default NewClass;
