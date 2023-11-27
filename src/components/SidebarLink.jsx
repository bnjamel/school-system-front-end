import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function SidebarLink({ link, text }) {
  return (
    <li className=" py-2 lg:block  ">
      <NavLink
        to={link}
        className={`${({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      } linkStyle font-cairoRegular`}
      >
        {text}
      </NavLink>
    </li>
  );
}
