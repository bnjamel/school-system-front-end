import React from "react";
import { Link } from "react-router-dom";

export default function SidebarLink({ link, text }) {
  return (
    <li className="w-full py-1 lg:block">
      <Link
        to={link}
        className="block py-2 lg:text-sm xl:text-[1.1rem] lg:pr-2 rounded-md min-w-full hover:bg-white text-white hover:text-black transition ease-in-out"
      >
        {text}
      </Link>
    </li>
  );
}
