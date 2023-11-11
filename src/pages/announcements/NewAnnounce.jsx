import React from "react";
import { BiImageAdd } from "react-icons/bi";

function NewAnnounce() {
  return (
    <div dir="rtl" className="mx-auto max-w-[1000px] flex flex-col pt-[12rem]">
      {/* COVER */}
      <div
        dir="rtl"
        className="w-full h-[12rem]  rounded-md self-center overflow-hidden"
      >
        <label
          htmlFor="file"
          className="cursor-pointer bg-blue-500  items-end px-10 py-4 flex h-full transition ease-in-out hover:opacity-90"
        >
          <div className="items-center flex">
            <div className="bg-[#091420] rounded-full p-2 items-center ml-4">
              <BiImageAdd className="text-2xl text-white " />
            </div>
            <h2 className="font-cairoBold text-2xl text-white ">
              اضف غلاف للتبليغ
            </h2>
          </div>
          <input id="file" name="file" type="file" className="hidden" />
        </label>
      </div>
      {/* ALL OF IT / JUSTIFIED CENTERED / FOR THE MOBILE */}
      <div className="flex flex-col justify-center self-center items-center lg:self-auto lg:block">
        {/* TEXT */}
        <div className="mt-6 font-cairoBold">
          <input
            className="w-fit lg:w-full  rounded-lg border-gray-400 border align-top shadow-sm sm:text-sm p-4  focus:border-dark-100 outline-none focus:border-transparent transition ease-in-out"
            type="text"
            placeholder="عنوان التبليغ"
          ></input>
        </div>
        {/* TEXTAREA */}
        <div className="my-6 font-cairoBold">
          <textarea
            className="w-fit lg:w-full rounded-lg border-gray-400 border align-top shadow-sm sm:text-sm p-4 max-h-[400px] min-h-[200px] focus:border-dark-100 outline-none focus:border-transparent transition ease-in-out"
            rows="8"
            placeholder="اكتب محتوى التبليغ..."
          ></textarea>
        </div>
        {/* SELECT */}
        <div className="flex flex-col items-start font-cairoRegular mb-10 ">
          <label htmlFor="">نوع التبليغ</label>
          <select className="w-60 rounded-md text-black/50 p-1.5 border bg-white border-gray-500/50 mt-2 focus:border-black/50 transition ease-in-out">
            <option value="عام">عام</option>
            <option value="نشاط">نشاط</option>

            <option value="امتحان">امتحان</option>
            <option value="ضروري">ضروري</option>
          </select>
        </div>
        {/* BUTTON */}
        <div>
          <button className="transition ease-in-out hover:scale-[1.04] active:scale-[.99] md:flex px-6 text-lg font-cairoSemiBold py-2 rounded-md text-white bg-[#5B91D0] ml-4 ">
            نشر التبليغ
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewAnnounce;
