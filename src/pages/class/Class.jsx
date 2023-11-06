import React from "react";

const data = [1, 2, 2, 2, 2, 2, 2, 8];

export default function Class() {
  return (
    <div dir="rtl" className="mx-auto max-w-[1000px] flex flex-col pt-[12rem]">
      {/* TEACHER */}
      {/* SEARCH + BUTTON */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center mx-[8rem] xl:mx-0 justify-center mb-6">
        <h1 className="font-cairoRegular text-2xl text-[#999999]">الصفوف</h1>
        {/* BUTTON */}
        <button className="my-2 transition ease-in-out hover:scale-[1.06] active:scale-[.9] lg:my-0 px-3 py-1.5 rounded-md text-white font-cairoRegular bg-[#5B91D0]">
          إضافة صف +
        </button>
      </div>
      {/* CLASSES */}
      <div className="flex flex-col lg:flex-row container lg:flex-wrap mx-auto items-center lg:gap-8 justify-center">
        {data.map((item) => (
          <div className="">
            <div className="mt-4 lg:mt-0 bg-white w-[14rem]  rounded-lg overflow-hidden shadow-sm hover:shadow-md ">
              <div className="text-xl font-cairoSemiBold mx-6 mt-4 border-b border-black pb-2 ">
                صف الأول
              </div>
              <div className="my-6 mx-6 items-center  ">
                <div className="cursor-pointer my-2 hover:text-gray-600 underline">
                  شعبة أ
                </div>
                <div className="cursor-pointer my-2 hover:text-gray-600 underline">
                  شعبة ب
                </div>
                <div className="cursor-pointer my-2 hover:text-gray-600 underline">
                  شعبة ج
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
