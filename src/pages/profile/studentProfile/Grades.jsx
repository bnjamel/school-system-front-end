import React from "react";

function Grades() {
  return (
    <div className="flex flex-col mx-10 overflow-y-scroll h-[100vh]">
      <div className="mb-6">
        <h1 className="font-cairoBold text-xl ">درجات الطالب</h1>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 lg:mx-0">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-lg">
          <thead className="ltr:text-left rtl:text-right bg-blue-50 ">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                المادة
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الدرجة
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                مادة 1
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                75
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                مادة 2
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700  border-l border-black/25">
                75
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                مادة 3
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                70
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                مادة 4
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                70
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                مادة 5
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 border-l border-black/25">
                82
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
