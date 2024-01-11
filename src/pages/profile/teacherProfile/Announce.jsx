import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardBody, Typography } from "@material-tailwind/react";
import useFetch from "../../../customHooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TfiAnnouncement } from "react-icons/tfi";

function Announce({ id }) {
  // const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/byId/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {});
  }, []);

  const handleAnnounceClick = (id) => {
    navigate(`/announcements/${id}`);
  };

  return (
    <div>
      {/* CARDS */}
      <div
        dir="ltr"
        className="pt-4 flex flex-col overflow-hidden overflow-y-scroll container gap-2 md:gap-4 mb-6 hide-scrollbar h-[100vh]"
      >
        {user?.Announcements.length > 0 ? (
          user.Announcements.map((item) => (
            <div
              onClick={() => handleAnnounceClick(item?.id)}
              key={item}
              dir="rtl"
              className=""
            >
              <div className="bg-white py-1 items-center transition cursor-pointer  rounded-lg overflow-hidden mx-6 shadow-sm hover:shadow-md border border-gray-300/50 hover:border-gray-500 flex ">
                {item?.cover ? (
                  <div className="h-[8rem] w-[10rem] mx-2 rounded-lg overflow-hidden bg-gradient">
                    <img
                      src={"http://localhost:3001/images/" + item?.cover}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="h-[8rem] w-[10rem] mx-2 rounded-lg overflow-hidden bg-gradient flex justify-center items-center">
                    <TfiAnnouncement className="text-white p-6 w-full h-full" />
                  </div>
                )}
                <div className="flex flex-col">
                  <CardBody>
                    <Typography
                      variant="h5"
                      className="text-lg font-cairoSemiBold text-black"
                    >
                      {item?.title}
                    </Typography>
                    <Typography className="mb-2 font-cairoRegular text-sm">
                      {item?.date}
                    </Typography>
                    <Typography className="font-cairoRegular text-sm max-w-xs">
                      {item?.body}
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
          ))
        ) : (
          <div className="w-full flex justify-center items-center">
            <h1 className="text-black text-[2.2rem] py-[4rem]">
              لا توجد تبليغات
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Announce;
