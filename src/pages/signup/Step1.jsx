import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { HiOutlineUpload } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import CustomInput from "../../components/CustomInput";

function Step1({ handleNext, handlePrev, isLastStep, setIsLastStep, control }) {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("No file selected");

  const types = ["image/png", "image/jpeg"];

  const handleImageUpload = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFileName(selected.name);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeImage = () => {
    setFileName("No file selected");
    setFile(null);
  };

  return (
    <div>
      {/* FORM */}
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-6 font-cairoRegular">
        <h2 class="text-lg font-cairoSemiBold border-b border-black pb-4 text-[#091420] dark:text-white">
          الرجاء ادخال المعلومات الشخصية
        </h2>

        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 ">
            {/* control,
          name,
          rules,
          label,
          type,
          placeholder,
          error, */}
            <CustomInput
              control={control}
              name={"name"}
              placeholder={"اسم الطالب الثلاثي"}
              type={"text"}
              rules={{
                required: "الرجاء إدخال اسم الطالب",
              }}
            />

            <CustomInput
              control={control}
              name={"email"}
              placeholder={"البريد الالكتروني"}
              type={"email"}
              rules={{
                required: "الرجاء إدخال البريد الالكتروني",
              }}
            />
            <CustomInput
              control={control}
              name={"date"}
              placeholder={"تاريخ الميلاد"}
              type={"date"}
              max={new Date().toISOString().split("T")[0]}
              rules={{
                required: "الرجاء إدخال تاريخ الميلاد",
              }}
            />
            <CustomInput
              control={control}
              name={"location"}
              placeholder={"العنوان"}
              type={"text"}
              rules={{
                required: "الرجاء إدخال العنوان",
              }}
            />

            <CustomInput
              control={control}
              name={"gender"}
              placeholder={"الجنس"}
              type={"select"}
              options={[
                {
                  id: 1,
                  name: "ذكر",
                },
                {
                  id: 2,
                  name: "انثى",
                },
              ]}
              rules={{
                required: "الرجاء إدخال الجنس",
              }}
            />

            <CustomInput
              control={control}
              name={"parent"}
              placeholder={"ولي امر الطالب"}
              type={"text"}
              rules={{
                required: "الرجاء إدخال اسم ولي امر الطالب",
              }}
            />
            <CustomInput
              control={control}
              name={"phone_number"}
              placeholder={"رقم هاتف ولي امر الطالب"}
              type={"text"}
              rules={{
                required: "الرجاء إدخال رقم هاتف ولي امر الطالب",
              }}
            />
            {/* <div>
              <input
                id="username"
                type="text"
                placeholder="اسم الطالب الثلاثي"
                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                id="emailAddress"
                type="email"
                placeholder="البريد الالكتروني"
                class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                type="date"
                placeholder="تاريخ الميلاد"
                class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                id="location"
                type="text"
                placeholder="العنوان"
                class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                id="parent"
                type="text"
                placeholder="اسم ولي امر الطالب"
                class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                id="phone_number"
                type="text"
                placeholder="رقم هاتف ولي امر الطالب"
                class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div> */}
            {/* Profile Picture */}
          </div>
        </form>
      </section>
      {/* BUTTONS */}
      <div className=" flex justify-between">
        <Button
          className="font-cairoBold text-sm bg-blue-500"
          onClick={handleNext}
        >
          التالي
        </Button>
        <Button className="font-cairoBold text-sm" onClick={handlePrev}>
          رجوع
        </Button>
      </div>
    </div>
  );
}

export default Step1;
