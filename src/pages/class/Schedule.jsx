import React from "react";

function Schedule() {
  return (
    <div>
      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 mx-10 lg:mx-0">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-lg ">
          <thead className="ltr:text-left rtl:text-right bg-blue-50 ">
            <tr>
              <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 ">
                اليوم
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الدرس الأول
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الدرس الثاني
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الدرس الثالث
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الدرس الرابع
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الدرس الخامس
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الدرس السادس
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                الأحد
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                انكليزي
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                عربي
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                كيمياء
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                فيزياء
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                رياضيات
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                أحياء
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                الإثنين
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                انكليزي
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                عربي
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                كيمياء
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                فيزياء
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                رياضيات
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                أحياء
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                الثلاثاء
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                انكليزي
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                عربي
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                كيمياء
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                فيزياء
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                رياضيات
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                أحياء
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                الأربعاء
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                انكليزي
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                عربي
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                كيمياء
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                فيزياء
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                رياضيات
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                أحياء
              </td>
            </tr>

            <tr>
              <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                الخميس
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                انكليزي
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                عربي
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                كيمياء
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                فيزياء
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                رياضيات
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                أحياء
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schedule;
