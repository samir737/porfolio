import React, { useState } from 'react';
import Link from 'next/link';
import data from '../utils/data';

const Navbar = () => {
  const { links } = data;
  const [open, setOpen] = useState(true);
  return (
    <header id="nav" className="w-full shadow-md shadow-gray-200">
      <div className="w-full py-2 flex justify-between items-center px-10 ">
        <div className="flex">
          <h1 className="text-2xl uppercase  font-bold">port<span className='text-rose-600'>folio</span> </h1>
        </div>
        <ul className="md:flex items-center gap-8 justify-between hidden ">
          {links.map((link, index) => {
            return (
              <Link href={link.link} key={index} passHref>
                <a className="uppercase font-semibold hover:rounded-md   px-4 py-2 hover:border-none hover:shadow-sm duration-300 hover:bg-red-600">
                  {link.title}
                </a>
              </Link>
            );
          })}
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer hover:text-red-600 duration-300 md:hidden "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      {/* MOBİLE NAV */}
      <div className={open ? 'hidden' : 'block '}>
        <ul className="flex flex-col mt-4 pb-4 items-center gap-4 justify-between md:hidden w-full ">
          {links.map((link, i) => {
            return (
              <Link key={i} href={link.link}>
                <p
                  onClick={() => setOpen(!open)}
                  className=" w-full uppercase font-semibold  px-4 py-6 text-center hover:border-b-1 hover:shadow-sm duration-300 hover:bg-red-600"
                >
                  {link.title}
                </p>
              </Link>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
