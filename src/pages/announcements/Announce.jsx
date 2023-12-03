import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import axios from "axios";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center w-full h-full bg-red-300">
      <h1 className="text-[2rem]">Not Found :*{"("}</h1>
    </div>
  );
};

function Announce() {
  const { id } = useParams();

  if (!id) return <NotFound />;

  const { data, isPending, error } = useFetch(
    `http://localhost:3001/announcement/byId/${id}`
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
          <div className="w-full h-[15rem] bg-blue-500 rounded-md self-center"></div>
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
