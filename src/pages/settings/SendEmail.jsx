import React, { useState } from "react";

function SendEmail() {
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
    <div dir="rtl" className="mx-auto max-w-[600px] flex flex-col py-10">
      {/* ALL OF IT / JUSTIFIED CENTERED / FOR THE MOBILE */}
      <div className="flex flex-col justify-center self-center items-center lg:self-auto lg:block">
        {/* TEXT */}
        <div className="mt-6 font-cairoBold">
          <input
            className="w-fit lg:w-full rounded-lg border-gray-400 border align-top shadow-sm sm:text-sm p-4  focus:border-black outline-none transition ease-in-out"
            type="text"
            placeholder="عنوان التبليغ"
          ></input>
        </div>
        {/* TEXTAREA */}
        <div className="my-6 font-cairoBold">
          <textarea
            className="w-fit lg:w-full rounded-lg border-gray-400 border align-top shadow-sm sm:text-sm p-4 max-h-[400px] min-h-[200px] focus:border-dark-100 outline-none  transition ease-in-out"
            rows="8"
            placeholder="اكتب محتوى التبليغ..."
          ></textarea>
        </div>
        {/* SELECT */}
        <div className="flex flex-col items-start font-cairoRegular mb-10 ">
          <label htmlFor="">جدولة التنبيه</label>
          <select className="w-60 rounded-md text-black/50 p-1.5 border bg-white border-gray-500/50 mt-2 focus:border-black/50 transition ease-in-out">
            <option value="فوري">فوري</option>
            <option value="جدولة">وقت آخر</option>
          </select>
        </div>
        {/* BUTTON */}
        <div>
          <button className="transition ease-in-out hover:scale-[1.04] active:scale-[1] md:flex px-6 text-lg font-cairoSemiBold py-2 rounded-md text-white bg-[#5B91D0] ml-4 ">
            نشر التبليغ
          </button>
        </div>
      </div>
    </div>
  );
}

export default SendEmail;
