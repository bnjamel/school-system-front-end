import React from "react";
import { Link } from "react-router-dom";
import { CardBody, Typography } from "@material-tailwind/react";

function Announce() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      {/* CARDS */}
      <div
        dir="ltr"
        className="pt-4 flex flex-col overflow-hidden overflow-y-scroll container gap-2 md:gap-4 mb-6 hide-scrollbar h-[100vh]"
      >
        {data.map((item) => (
          <div key={item} dir="rtl" className="">
            <div className="bg-white  rounded-lg overflow-hidden mx-6 shadow-sm hover:shadow-md border border-gray-300/50 hover:border-gray-500 flex ">
              <div className="w-[10rem] h-[6rem] md:h-[10rem] md:w-[10rem] mx-2 rounded-lg self-center bg-[#47D0C8]"></div>
              <div className="flex flex-col">
                <CardBody>
                  <Typography
                    variant="h5"
                    className="text-lg font-cairoSemiBold text-black"
                  >
                    عنوان التبليغ
                  </Typography>
                  <Typography className="mb-2 font-cairoRegular text-sm">
                    08/12/2023
                  </Typography>
                  <Typography className="font-cairoRegular text-sm max-w-xs">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.
                  </Typography>
                  <Link to="/announcements/announce">
                    <div className="mt-2 ">
                      <button className="font-cairoRegular transition ease-in-out hover:scale-[1.06] active:scale-[.9] bg-dark-500 text-white p-2 rounded-lg text-sm ">
                        قراءة المزيد
                      </button>
                    </div>
                  </Link>
                </CardBody>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announce;
