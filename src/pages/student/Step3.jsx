import React from "react";
import { Button } from "@material-tailwind/react";

function Step3({ handleNext, handlePrev, isLastStep, setIsLastStep }) {
  return (
    <div>
      {/* FORM */}
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-6 font-cairoRegular">
        <h2 class="text-lg font-cairoSemiBold border-b border-black pb-4 text-[#091420] dark:text-white">
          مراجعة وتأكيد المعلومات
        </h2>
        {/* Profile Picture */}
        <div className="flex flex-col justify-center mt-6 items-center">
          <img className="w-40 h-40  bg-blue-500 rounded-full " src="" alt="" />
          <h2 className="font-cairoBold text-md mt-2">اسم الطالب الكامل</h2>
        </div>
        {/* Details */}
        <div className="mt-8">
          <div className="">
            <h3 className="font-cairoSemiBold">البريد الالكتروني</h3>
            <p className="text-[#333333]">name.student@school.com</p>
          </div>
          <div className="my-2">
            <h3 className="font-cairoSemiBold">كلمة السر</h3>
            <p className="text-[#333333]">12345</p>
          </div>
          <div className="">
            <h3 className="font-cairoSemiBold">تاريخ الميلاد</h3>
            <p className="text-[#333333]">2004-1-1</p>
          </div>
          <div className="my-2">
            <h3 className="font-cairoSemiBold">العنوان</h3>
            <p className="text-[#333333]">بصرة - عراق</p>
          </div>
          <div>
            <h3 className="font-cairoSemiBold">الصف</h3>
            <p className="text-[#333333]">الخامس</p>
          </div>
          <div className="my-2">
            <h3 className="font-cairoSemiBold">المادة</h3>
            <p className="text-[#333333]">كيمياء</p>
          </div>
          <div>
            <h3 className="font-cairoSemiBold">الشعبة</h3>
            <p className="text-[#333333]">أ</p>
          </div>
        </div>
      </section>
      {/* BUTTONS */}
      <div className="flex justify-between">
        <Button
          className="font-cairoBold text-sm bg-blue-500"
          onClick={handleNext}
        >
          إضافة
        </Button>
        <Button className="font-cairoBold text-sm" onClick={handlePrev}>
          رجوع
        </Button>
      </div>
    </div>
  );
}

export default Step3;
