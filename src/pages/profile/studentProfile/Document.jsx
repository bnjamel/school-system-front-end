import { Button } from "@material-tailwind/react";
import React from "react";
import { useStateValue } from "../../../context/StateProvider";
import axios from "axios";

function Document({
  id,
  document,
  handleDocumentUpload,
  studentDocumentPreview,
  handleSubmitDocument,
}) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="flex hide-scrollbar flex-col mx-10 h-[100vh]">
      <div className="mb-10">
        {document ? (
          <>
            <h1 className="font-cairoBold text-xl mb-6">وثيقة الطالب</h1>
            <label className="border bg-blue-gray-50 rounded-md overflow-hidden hover:opacity-75 transition border-black font-cairoRegular px-10 py-1 cursor-pointer">
              تحميل بصيغة PDF
            </label>
            <div className="bg-blue-500 w-full mt-12 h-[20rem] rounded">
              <img
                src={"http://localhost:3001/images/" + document}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </>
        ) : (
          <>
            {user.role === "admin" ? (
              <>
                <h1 className="font-cairoBold text-xl mb-6">وثيقة الطالب</h1>

                <label
                  htmlFor="document"
                  className="cursor-pointer transition bg-white hover:opacity-75 border border-blue-500 border-dashed rounded-md w-full h-[20rem] flex flex-col justify-center items-center"
                >
                  {/* <h1 className="font-cairoBold text-xl mb-6">
    هذا الطالب لا يملك وثيقة
  </h1>
  <button className="text-lg pointer-events-none bg-blue-500 text-white bg-gradient px-12 py-2 rounded-md">
    اضف وثيقة
  </button> */}
                  {!studentDocumentPreview && (
                    <>
                      <h1 className="font-cairoBold text-xl mb-6">
                        هذا الطالب لا يملك وثيقة
                      </h1>
                      <button className="text-lg font-cairoBold pointer-events-none text-white bg-black px-12 py-2 rounded-md">
                        اضف وثيقة
                      </button>
                    </>
                  )}
                  <input
                    type="file"
                    id="document"
                    name="document"
                    className="hidden"
                    onChange={handleDocumentUpload}
                  />

                  {studentDocumentPreview && (
                    <>
                      <img
                        src={studentDocumentPreview}
                        className="img w-full h-full object-cover"
                      />
                    </>
                  )}
                </label>
                {studentDocumentPreview && (
                  <div className="flex justify-center items-center py-2">
                    <Button
                      className="font-cairoBold"
                      onClick={handleSubmitDocument}
                    >
                      إضافة الوثيقة
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full flex justify-center items-center">
                <h1 className="text-black text-[2.2rem] py-[4rem]">
                  لا توجد وثيقة
                </h1>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Document;
