import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import { useStateValue } from "../../context/StateProvider";

export default function WeeklySchedule() {
  const [{ endpoint }] = useStateValue();
  const { data, isPending, error } = useFetch(`${endpoint}class/`, "GET", null);

  return (
    <div dir="rtl" className="mx-auto max-w-[1000px] flex flex-col pt-[12rem]">
      {/* H1 */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center mx-[3rem] xl:mx-[2rem] justify-center mb-6 ">
        <h1 className="font-cairoRegular text-2xl text-[#999999]">
          الجدول الأسبوعي
        </h1>
      </div>

      {/* CLASSES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 max-w-[20rem] md:max-w-full mx-auto container">
        {data &&
          data
            .sort((a, b) => a.id - b.id)
            .map((item) => (
              <div
                key={item.id}
                className="flex px-[2rem] justify-center items-center"
              >
                <div className="mt-4 border-black/25 hover:border-blue-500 transition ease-in-out border lg:mt-0 w-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md ">
                  <div className="text-xl font-cairoSemiBold mx-6 mt-4 border-b border-black pb-2 ">
                    صف {item?.name}
                  </div>
                  <div className="my-6 mx-6 items-center font-cairoRegular">
                    {/* Schedule A // you can add B & C later */}
                    {item.Divisions.map((division) => (
                      <Link
                        key={division.id}
                        to={`/weekly_schedule/schedule/${division.id}`}
                      >
                        <div className="cursor-pointer my-2 hover:text-gray-600 underline">
                          شعبة {division?.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
