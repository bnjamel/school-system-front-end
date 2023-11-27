import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { Button } from "@material-tailwind/react";

function TeacherEdit() {
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
    <div dir="rtl" className="mx-auto max-w-[600px] flex flex-col pt-[12rem]">
      {/* FORM */}
      <section class="max-w-4xl p-6 bg-white rounded-md shadow-md dark:bg-gray-800 mb-6 font-cairoRegular">
        {/* Profile Picture */}
        <div
          dir="rtl"
          className="flex flex-col justify-center mt-4 items-center"
        >
          <label
            htmlFor="file"
            className={`cursor-pointer ${
              !file && "bg-blue-500"
            } rounded-full self-center flex w-[8rem] h-[8rem] transition ease-in-out border border-transparent hover:border-light-400/50 hover:opacity-90`}
          >
            {!file && (
              <>
                <div className="items-center flex px-6 py-4">
                  <div className="bg-[#091420] rounded-full p-2 items-center mt-20  mr-4">
                    <BiImageAdd className="text-2xl text-white " />
                  </div>
                </div>
              </>
            )}
            <input
              id="file"
              name="file"
              type="file"
              className="hidden"
              accept={types}
              onChange={handleImageUpload}
            />
            {file && (
              <>
                <img src={file} className="img w-full h-full object-contain" />
              </>
            )}
          </label>
        </div>

        {/* Details */}
        <div className="my-8 flex justify-between mx-auto max-w-[500px]">
          <div>
            <div>
              <input
                className="w-fit lg:w-ful rounded-lg border-gray-400 border align-top shadow-sm sm:text-sm p-3  focus:border-dark-100 outline-none  transition ease-in-out "
                type="text"
                placeholder="اسم الأستاذ الكامل"
              ></input>
            </div>

            <div className="my-2">
              <input
                className="w-fit lg:w-full  rounded-lg border-gray-400 border align-top shadow-sm sm:text-sm p-3  focus:border-dark-100 outline-none  transition ease-in-out"
                type="text"
                placeholder="12345"
              ></input>
            </div>

            <div className="my-[10px]">
              {/* SELECT */}
              <div className="flex flex-col items-start font-cairoRegular ">
                <select className=" rounded-md text-black/50 border border-gray-500/50 focus:border-black/50 transition ease-in-out px-6 py-2 cursor-pointer">
                  <option value="">رياضيات</option>
                  <option value="">انكليزي</option>
                  <option value="">عربي</option>
                  <option value="">اسلامية</option>
                  <option value="">جغرافية</option>
                  <option value="">تاريخ</option>
                </select>
              </div>
            </div>

            <div className="mt-2">
              {/* SELECT */}
              <input
                className="w-fit lg:w-full  rounded-lg border-gray-400 border align-top shadow-sm sm:text-sm p-3  focus:border-dark-100 outline-none  transition ease-in-out"
                type="text"
                placeholder="6 سنوات"
              ></input>
            </div>
          </div>

          <div>
            <div>
              <input
                className="w-fit lg:w-full  rounded-lg border-gray-400 border align-top shadow-sm sm:text-sm p-3  focus:border-dark-100 outline-none  transition ease-in-out"
                type="text"
                placeholder="name.teacher@school.com"
              ></input>
            </div>

            <div className="my-2">
              <input
                className="w-fit lg:w-full  rounded-lg border-gray-400 border align-top shadow-sm sm:text-sm p-3  focus:border-dark-100 outline-none  transition ease-in-out"
                type="date"
                placeholder="1988-2-10"
              ></input>
            </div>

            <div>
              <input
                className="w-fit lg:w-full rounded-lg border-gray-400 border align-top shadow-sm sm:text-sm p-3  focus:border-dark-100 outline-none  transition ease-in-out "
                type="text"
                placeholder="عن الأستاذ"
              ></input>
            </div>

            <div className="mt-2">
              <input
                className="w-fit lg:w-full  rounded-lg border-gray-400 border align-top shadow-sm sm:text-sm p-3  focus:border-dark-100 outline-none  transition ease-in-out"
                type="text"
                placeholder="البصرة - الجزيرة"
              ></input>
            </div>
          </div>
        </div>
        {/* BUTTONS */}
        <div className="flex justify-between max-w-[600px] mx-auto">
          <Button className="font-cairoBold text-sm bg-blue-500">
            حفظ التغييرات
          </Button>
          <Button className="font-cairoBold text-sm">إلغاء</Button>
        </div>
      </section>
    </div>
  );
}

export default TeacherEdit;
