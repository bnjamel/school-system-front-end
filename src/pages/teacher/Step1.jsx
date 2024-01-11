import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { HiOutlineUpload } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import CustomInput from "../../components/CustomInput";

function Step1({
  handleNext,
  handlePrev,
  imagePreview,
  handleImageUpload,
  control,
}) {
  // const [file, setFile] = useState();
  // const [fileName, setFileName] = useState("No file selected");

  const types = ["image/png", "image/jpeg"];

  // const handleImageUpload = (e) => {
  //   const selected = e.target.files[0];
  //   if (selected) {
  //     setFileName(selected.name);
  //     setFile(URL.createObjectURL(e.target.files[0]));
  //   }
  // };

  // const removeImage = () => {
  //   setFileName("No file selected");
  //   setFile(null);
  // };

  return (
    <div>
      {/* FORM */}
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-6 font-cairoRegular">
        <h2 class="text-lg font-cairoSemiBold border-b border-black pb-4 text-[#091420] dark:text-white">
          الرجاء ادخال المعلومات الشخصية
        </h2>

        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 ">
            <CustomInput
              control={control}
              name={"name"}
              placeholder={"اسم الاستاذ الثلاثي"}
              type={"text"}
              rules={{
                required: "الرجاء إدخال اسم الاستاذ",
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
              name={"password"}
              placeholder={"كلمة المرور"}
              type={"password"}
              rules={{
                required: "الرجاء إدخال كلمة المرور",
              }}
            />

            <CustomInput
              control={control}
              name={"birthdate"}
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
              name={"phone_number"}
              placeholder={"رقم الهاتف"}
              type={"text"}
              rules={{
                required: "الرجاء إدخال رقم الهاتف",
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

            {/* Profile Picture */}
            <div className="border w-full py-2 text-gray-900 bg-white  border-gray-200 px-8 rounded">
              <label
                htmlFor="image"
                className="cursor-pointer hover:bg-blue-500 hover:text-white  transition ease-in-out hover:opacity-80"
              >
                <div className="flex justify-between items-center ">
                  <h2 className="font-cairoBold  text-[#938D8D]">
                    الصورة الشخصية
                  </h2>
                  <div className="bg-blue-500 rounded-full p-1.5 items-center mr-4">
                    <HiOutlineUpload className="text-2xl text-white " />
                  </div>
                </div>
                <input
                  id="image"
                  name="image"
                  type="file"
                  className="hidden"
                  accept={types}
                  onChange={handleImageUpload}
                />
                {imagePreview && (
                  <>
                    <img
                      src={imagePreview}
                      className="img w-[50px] h-[50px] object-contain"
                    />
                    {/* <p className="text-[18px] font-cairoSemiBold">{fileName}</p> */}
                  </>
                )}
              </label>
            </div>
          </div>
          {/* {file && (
            <button
              className="my-2 bg-red-400 p-2 rounded hover:opacity-80 transition ease-in-out"
              onClick={removeImage}
            >
              <FaRegTrashAlt className="text-[24px] text-light-100" />
            </button>
          )} */}
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
