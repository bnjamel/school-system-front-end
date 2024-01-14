import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import axios from "axios";
import { TfiAnnouncement } from "react-icons/tfi";
import { useStateValue } from "../../context/StateProvider";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center w-full h-full bg-red-300">
      <h1 className="text-[2rem]">Not Found :*{"("}</h1>
    </div>
  );
};

function Announce() {
  const [{ endpoint }] = useStateValue();
  const { id } = useParams();

  if (!id) return <NotFound />;

  const { data, isPending, error } = useFetch(
    `${endpoint}announcement/byId/${id}`
  );

  return (
    <div className="mx-auto max-w-[1000px] flex flex-col pt-[12rem] ">
      {isPending ? (
        <div className="w-full justify-center flex items-center py-12">
          <h1 className="text-dark-100 text-[2rem]">يرجى الانتظار</h1>
        </div>
      ) : (
        <>
          {/* {data && console.log(data?.User.role)} */}
          {!data?.cover ? (
            <div className="h-[15rem] mx-2 mt-4 rounded-lg bg-gradient flex justify-center items-center">
              <TfiAnnouncement className="text-white p-6 w-full h-full" />
            </div>
          ) : (
            <div className="h-[15rem] mt-4 w-full rounded-lg overflow-hidden ">
              <img
                src={endpoint + "images/" + data?.cover}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          )}
          <div
            dir="rtl"
            className="font-cairoRegular mt-6 mx-10 xl:mx-0 flex-col flex items-start"
          >
            <label className="bg-brown-400 rounded-lg px-4 py-1 text-white">
              {data?.type}
            </label>
            <h1 className="text-2xl font-cairoBold pt-2 ">{data?.title}</h1>
            <h3 className="text- font-cairoBold pt-2 self-start ">
              أ. {data?.User.name}
            </h3>
            <h3 className="pb-4 w-full mb-8 border-b border-b-light-200">
              {data?.createdAt.slice(0, 10)}
            </h3>
            <p className="text-lg">{data?.body}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Announce;
