import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomInput from "../../components/CustomInput";

function SendEmail() {
  const [formData, setFormData] = useState();
  const [type, setType] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
    if (formData) {
      // console.log(formData);
    }
  };

  return (
    <div dir="rtl" className="mx-auto max-w-[600px] flex flex-col py-10">
      {/* ALL OF IT / JUSTIFIED CENTERED / FOR THE MOBILE */}
      <div className="flex flex-col justify-center self-center items-center lg:self-auto lg:block w-full">
        {/* TEXT */}
        <CustomInput
          control={control}
          name={"title"}
          type="text"
          placeholder="عنوان التنبيه"
          rules={{
            required: "الرجاء ادخال عنوان للتنبيه",
          }}
        />
        <div className="mt-6 w-full">
          <CustomInput
            control={control}
            name={"body"}
            type="textArea"
            placeholder="اكتب محتوى للتنبيه"
            rules={{
              required: "الرجاء ادخال محتوى للتنبيه",
            }}
          />
        </div>

        {/* SELECT */}
        <div className="mt-6 flex flex-col items-start font-cairoRegular mb-10 ">
          <label htmlFor="">جدولة التنبيه</label>
          <select
            value={type}
            onChange={(e) => handleTypeChange(e)}
            className="w-60 rounded-md text-black/50 p-1.5 border bg-white border-gray-500/50 mt-2 focus:border-black/50 transition ease-in-out"
          >
            <option value="فوري">فوري</option>
            <option value="جدولة">وقت آخر</option>
          </select>

          {type === "جدولة" && (
            <div className="mt-6">
              <label htmlFor="">حدد الوقت</label>
              <div className="flex gap-x-1 w-60">
                <input
                  className="w-full rounded-md text-black/50 p-1.5 border bg-white border-gray-500/50 mt-2 focus:border-black/50 transition ease-in-out"
                  type="text"
                  placeholder="HH"
                />
                <input
                  className="w-full rounded-md text-black/50 p-1.5 border bg-white border-gray-500/50 mt-2 focus:border-black/50 transition ease-in-out"
                  type="text"
                  placeholder="MM"
                />

                <select className="w-60 rounded-md text-black/50 p-1.5 border bg-white border-gray-500/50 mt-2 focus:border-black/50 transition ease-in-out">
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              </div>
            </div>
          )}
        </div>
        {/* BUTTON */}
        <div>
          <button
            onClick={handleSubmit(onSubmit)}
            className="transition ease-in-out hover:scale-[1.04] active:scale-[1] md:flex px-6 text-lg font-cairoSemiBold py-2 rounded-md text-white bg-[#5B91D0] ml-4 "
          >
            نشر التبليغ
          </button>
        </div>
      </div>
    </div>
  );
}

export default SendEmail;
