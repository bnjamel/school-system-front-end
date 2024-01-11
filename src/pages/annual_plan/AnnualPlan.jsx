import React from "react";
import { useStateValue } from "../../context/StateProvider";

export default function AnnualPlan() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div dir="rtl" className="mx-auto max-w-[1000px] flex flex-col pt-[12rem]">
      <div className="flex flex-col lg:flex-row justify-center text-center lg:text-justify lg:justify-between items-center mb-6">
        <div>
          <h1 className="font-cairoSemiBold text-2xl text-[#999999]">
            الخطة السنوية
          </h1>
          <h3 className="font-cairoRegular text-lg text-[#999999]">
            مواعيد الامتحانات الشهرية والنهائية
          </h3>
        </div>
        {user.role === "admin" && (
          <button className=" my-2 transition ease-in-out hover:scale-[1.06] active:scale-[.9] lg:my-0 px-6 py-1.5 rounded-md text-white font-cairoRegular bg-[#5B91D0]">
            تعديل
          </button>
        )}
      </div>
      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 mx-10 lg:mx-0 lg:overflow-hidden">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-lg overflow-hidden">
          <thead className="ltr:text-left rtl:text-right bg-blue-50 overflow-hidden">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                الصف
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الشهر الأول
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الشهر الثاني
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                امتحانات
                <br />
                نصف السنة
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                استلام النتائج
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الشهر الأول
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الشهر الثاني
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                امتحانات <br /> نهاية السنة
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 overflow-hidden">
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                الأول
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-01-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-02-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-03-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-04-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-05-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-06-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-07-23
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                الثاني
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-01-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-02-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-03-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-04-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-05-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-06-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-07-23
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                الثالث
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-01-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-02-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-03-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-04-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-05-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-06-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-07-23
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                الرابع
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-01-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-02-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-03-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-04-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-05-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-06-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-07-23
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                الخامس
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-01-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-02-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-03-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-04-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-05-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-06-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-07-23
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                السادس
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-01-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-02-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-03-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-04-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-05-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-06-23
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                2024-07-23
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
