import React from "react";
import { Link } from "react-router-dom";
import { CardBody, Typography } from "@material-tailwind/react";

function Thanks() {
  const data = [1, 2, 3, 4, 6];

  return (
    <div className="pt-4 h-[100vh] hide-scrollbar overflow-hidden overflow-y-scroll">
      {/* CARDS */}
      <div
        dir="rtl"
        // className="flex flex-row container flex-wrap mx-auto lg:gap-4 justify-center overflow-y-scroll h-[100vh] "
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-2 px-8 pb-4"
      >
        {data.map((item) => (
          <div key={item} dir="rtl" className="">
            <div className="bg-white border border-light-100/50 w-[15rem]   rounded-lg overflow-hidden shadow-sm hover:shadow-md">
              <div className="h-[6rem] md:h-[8rem] mx-2 mt-4 rounded-lg bg-[#47D0C8] "></div>
              <CardBody>
                <Typography
                  variant="h5"
                  className="text-lg font-cairoSemiBold text-black"
                >
                  كتاب شكر من
                </Typography>
                <Typography className="font-cairoRegular">
                  08/12/2023
                </Typography>
              </CardBody>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Thanks;
