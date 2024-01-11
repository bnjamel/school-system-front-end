import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Pending() {
  return (
    <div className="mx-auto max-w-[1000px] flex flex-col pt-[7rem]">
      <div className="w-full md:w-[90%]  px-8 self-center">
        <section class="max-w-4xl p-6 mx-auto flex flex-col items-center bg-white rounded-md shadow-md dark:bg-gray-800 my-6 font-cairoRegular">
          <h2 class="text-lg font-cairoSemiBold py-8 text-[1.6rem] text-center text-[#091420] dark:text-white">
            تم إرسال طلب التسجيل بنجاح ... يرجى انتظار الموافقة
          </h2>
          <h2 className="text-lg font-cairoSemiBold text-center text-[1rem] max-w-[60%] pb-4 text-[#091420] dark:text-white">
            يرجى متابعة البريد الالكتروني الذي ادخلته مسبقا سيتم إرسال اليك
            البريد الالكتروني وكلمة المرور للتمكن من تسجيل الدخول
          </h2>
          <Button className="font-cairoBold text-sm mt-12 bg-[#091420]">
            <Link to="/login">اضغط هنا لتسجيل الدخول</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
