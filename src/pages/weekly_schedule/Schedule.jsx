import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import useFetch from "../../customHooks/useFetch";
import axios from "axios"

function Schedule() {
  const [divisionData, setDivisionData] = useState();
  const {id} = useParams();
  const {data, isPending, error} = useFetch(`http://localhost:3001/schedule/byDivId/${id}`, "GET", null);

  const getData = async () => {
    const res = await axios.get(`http://localhost:3001/division/${id}`)
    .then(response => {
      setDivisionData(response.data)
    }).catch(error => {
      throw new Error(error.message)
    })
    return res
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div dir="rtl" className="mx-auto max-w-[1000px] flex flex-col pt-[12rem]">
      {/* H1 */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center  justify-center mb-6 ">
        <h1 className="font-cairoRegular text-2xl text-[#999999]">
          {/* {data && console.log(data)} شعبة */}
          صف {divisionData?.Class?.name} {" "}
          شعبة {divisionData?.name}
        </h1>
      </div>
      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 mx-10 lg:mx-0">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-lg">
          <thead className="ltr:text-left rtl:text-right bg-blue-50 ">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
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
            {
              data && data.map(item => (
                <tr key={item.id}>
                  <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                    {item?.Day?.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item?.first_lesson}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item?.second_lesson}

                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item?.third_lesson}

                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item?.fourth_lesson}

                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item?.fifth_lesson}

                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item?.sixth_lesson}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schedule;
