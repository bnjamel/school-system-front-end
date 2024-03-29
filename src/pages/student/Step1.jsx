import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { HiOutlineUpload } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import CustomInput from "../../components/CustomInput";

const evaluationOptions = [
  {
    id: 1,
    name: "ممتاز",
  },
  {
    id: 2,
    name: "جيد",
  },
  {
    id: 3,
    name: "مقبول",
  },
  {
    id: 4,
    name: "سيء",
  },
];

function Step1({ handleNext, handlePrev, isLastStep, setIsLastStep, control }) {
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

            <CustomInput
              control={control}
              name={"evaluation"}
              placeholder={"تقييم الطالب"}
              type={"select"}
              options={evaluationOptions}
              rules={{
                required: "الرجاء ادخال تقييم للطالب",
              }}
            />

            <CustomInput
              control={control}
              name={"about"}
              placeholder={"عن الطالب"}
              type={"textArea"}
              rules={{
                required: "الرجاء ادخل شرح عن الطالب",
              }}
            />

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
