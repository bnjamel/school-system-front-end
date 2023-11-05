import React from "react";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <div className=" border-t border-[#5B91D0] lg:mx-[5rem] my-6">
      <div className="flex flex-col lg:flex-row  items-center justify-between mx-[1rem] lg:mx-[10rem] my-[1.5rem]">
        <div className="">
          <h3 className="text-[#AAAAAA]">كل الحقوق محفوظة © 2023</h3>
        </div>
        <div className="flex gap-8 items-center">
          <ImFacebook className="w-[20px] h-[20px]" />
          <AiFillInstagram className="w-[24px] h-[24px]" />
          <IoLogoWhatsapp className="w-[22px] h-[22px]" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
