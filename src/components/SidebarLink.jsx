import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarLink({link, text}) {
  return (
    <li className="w-full py-2 md:hidden lg:block">
        <Link to={link} className="block py-2 sm:pr-2 md:pr-3 lg:text-[.9rem] xl:text-[1.2rem] lg:pr-2 rounded-md min-w-full hover:bg-white text-white hover:text-black transition ease-in-out">
            {text}
        </Link>
    </li>
  )
}
