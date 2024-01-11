import React from "react";
import { FiEdit } from "react-icons/fi";
import { useStateValue } from "../../../context/StateProvider";

function Cv({ about, evaluation }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="flex flex-col mx-10 mb-8">
      <div>
        <h1 className="flex font-cairoSemiBold text-xl mb-2">عن الطالب</h1>
        <p className="text-black/75 font-cairoRegular">
          {/* هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا يستبدل في نفس
          المساحة u. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة */}
          {about}
        </p>
      </div>
      <div className="my-10">
        <h1 className="flex font-cairoSemiBold text-xl mb-4">تقييم الطالب</h1>
        <label className="bg-green-500 text-white font-cairoRegular px-10 py-1 rounded-full text-xl ">
          {evaluation}
        </label>
      </div>
      <div>
        <h1 className="font-cairoSemiBold text-xl mb-2">
          معدلات السنوات السابقة
        </h1>
        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 lg:mx-0">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-lg">
            <thead className="ltr:text-left rtl:text-right bg-blue-50 ">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                  السنة الدراسية
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  الصف
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  المعدل
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                  2014-2015
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                  الأول
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                  80.2
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                  2015-2016
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700  border-l border-black/25">
                  الثاني
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                  88.1
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                  2016-2017
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                  الثالث
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                  90.8
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                  2017-2018
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                  الرابع
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                  73.0
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                  2018-2019
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                  الخامس
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                  77.6
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cv;
