import React from "react";
import { Link } from "react-router-dom";

export default function SidebarLink({ link, text }) {
  return (
    <li className=" py-2 lg:block  ">
      <Link
        to={link}
        className="block py-2 text-center font-cairoRegular text-black transition ease-in-out hover:bg-black hover:text-white rounded-md px-2"
      >
        {text}
      </Link>
    </li>
  );
}
