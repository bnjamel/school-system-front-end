import React from "react";
import { Link } from "react-router-dom";

export default function SidebarLink({ link, text }) {
  return (
    <li className="w-full py-1 lg:block">
      <Link
        to={link}
        className="block py-2 lg:pr-2 font-cairoRegular text-black transition ease-in-out hover:bg-black hover:text-white rounded-md "
      >
        {text}
      </Link>
    </li>
  );
}
