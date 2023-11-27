import React from "react";

import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { HiOutlineUpload } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";

function Step2({ handleNext, handlePrev }) {
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
          ادخل الصف والشعبة
        </h2>
        {/* FORM */}
        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 ">
            <div>
              <input
                type="text"
                placeholder="الصف"
                class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                id="group"
                type="text"
                placeholder="الشعبة"
                class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                id="group"
                type="text"
                placeholder="عن الطالب"
                class="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="border border-blue-500 px-8 py-1.5 rounded w-fit">
              <label
                htmlFor="file"
                className=" cursor-pointer hover:bg-blue-500 hover:text-white  transition ease-in-out hover:opacity-80 w-fit"
              >
                <div className="items-center flex">
                  <h2 className="font-cairoBold text-[#938D8D]">
                    إضافة الوثيقة
                  </h2>
                  <div className="bg-blue-500 rounded-full p-1.5 items-center mr-4">
                    <HiOutlineUpload className="text-2xl text-white " />
                  </div>
                </div>
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
                    <img
                      src={file}
                      className="img w-[50px] h-[50px] object-contain"
                    />
                    <p className="text-[18px] font-cairoSemiBold">{fileName}</p>
                  </>
                )}
              </label>

              {file && (
                <button
                  className="my-2 bg-red-400 p-2 rounded hover:opacity-80 transition ease-in-out"
                  onClick={removeImage}
                >
                  <FaRegTrashAlt className="text-[24px] text-light-100" />
                </button>
              )}
            </div>
          </div>
        </form>
      </section>
      {/* BUTTONS */}
      <div className="flex justify-between">
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

export default Step2;
