import { Button } from "@material-tailwind/react";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

function NewClass() {
  return (
    <div
      dir="rtl"
      className="mx-auto max-w-[1000px] flex flex-col pt-[12rem] px-8 md:px-0"
    >
      <h1 className="pb-4 font-cairoBold text-lg text-[#999999] w-full md:w-[60%] self-center">
        إضافة صف جديد
      </h1>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-6 font-cairoRegular w-full md:w-[60%] py-8 px-8 self-center">
        {/* FORM */}
        <form>
          <div class="grid grid-cols-1 gap-6  ">
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
                class="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          {/* Profile Picture */}
          <label className="cursor-pointer transition ease-in-out hover:opacity-80 w-fit ">
            <div className="items-center flex mt-6  ">
              <div className="bg-blue-500 rounded-full p-1.5 items-center ml-4">
                <FiPlus className="text-2xl text-white " />
              </div>
              <h2 className="font-cairoBold text-[#938D8D]">إضافة شعبة اخرى</h2>
            </div>
          </label>
        </form>
      </section>
      {/* BUTTONS */}
      <div className="flex justify-between w-full md:w-[60%] self-center">
        <Button type="submit" className="font-cairoBold text-sm bg-blue-500">
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
