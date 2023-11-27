import React from "react";

function Document() {
  return (
    <div className="flex flex-col mx-10 overflow-y-scroll h-[100vh]">
      <div className="mb-10">
        <h1 className="font-cairoBold text-xl mb-6">وثيقة الطالب</h1>
        <label className="border border-black font-cairoRegular px-10 py-1 cursor-pointer">
          تحميل بصيغة PDF
        </label>
      </div>

      <div className="bg-blue-500 w-full h-[20rem] rounded"></div>
    </div>
  );
}

export default Document;
