import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { HiOutlineUpload } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";

function Step1({ handleNext, handlePrev }) {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("No file selected");

  const types = ['image/png', 'image/jpeg'];

  const handleImageUpload = (e) => {
    const selected = e.target.files[0]
    if(selected) {
      setFileName(selected.name)
      setFile(URL.createObjectURL(e.target.files[0]))
    }
  }

  const removeImage = () => {
    setFileName("No file selected")
    setFile(null)
  }

  return (
    <div>
      {/* FORM */}
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-6 font-cairoRegular">
        <h2 class="text-lg font-cairoSemiBold border-b border-black pb-4 text-[#091420] dark:text-white">
          الرجاء ادخال المعلومات الشخصية
        </h2>

        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 ">
            <div>
              <input
                id="username"
                type="text"
                placeholder="اﻻسم"
                class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                id="password"
                type="password"
                placeholder="كلمة السر"
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
                id="address"
                type="address"
                placeholder="العنوان"
                class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            {/* Profile Picture */}
            <label
              htmlFor="file"
              className="cursor-pointer transition ease-in-out hover:opacity-80 w-fit"
            >
              <div className="items-center flex">
                <h2 className="font-cairoBold text-[#938D8D]">
                  الصورة الشخصية
                </h2>
                <div className="bg-blue-500 rounded-full p-1.5 items-center mr-4">
                  <HiOutlineUpload className="text-2xl text-white " />
                </div>
              </div>
              <input id="file" name="file" type="file" className="hidden" accept={types} onChange={handleImageUpload} />
              {
                file && (
                  <>
                    <img src={file} className='img w-[50px] h-[50px] object-contain'/>
                    <p className="text-[18px] font-cairoSemiBold">{fileName}</p>
                  </>
                )
              }
            </label>
          </div>
          {file && (
              <button className="my-2 bg-red-400 p-2 rounded hover:opacity-80 transition ease-in-out" onClick={removeImage}>
                <FaRegTrashAlt className="text-[24px] text-light-100" />
              </button> 
            )}
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
