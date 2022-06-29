import Link from "next/link";

import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen((prevNavValue) => !prevNavValue);
  };

  return (
    <header className="fixed bg-white z-[20] w-full py-4 shadow-xl overflow-hidden">
      <nav className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto flex items-center justify-between duration-300 ease-in">
        <div>
          <Link href="/">
            <p className="text-3xl font-bold tracking-wider cursor-pointer">
              <span className="text-green">E</span>duca
            </p>
          </Link>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 ml-auto text-xl">
          <Link href="/">
            <li className="hover:text-green cursor-pointer duration-150 ease-in">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="hover:text-green cursor-pointer duration-150 ease-in">
              About
            </li>
          </Link>
          <Link href="/courses">
            <li className="hover:text-green cursor-pointer duration-150 ease-in">
              Courses
            </li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-green cursor-pointer duration-150 ease-in">
              Contact
            </li>
          </Link>
        </ul>
        <div className="flex items-center gap-4 ml-10 cursor-pointer">
          <Link href="/account">
            <div className="bg-lightGreen text-green p-3 rounded-full text-md hover:text-lightGreen hover:bg-green  duration-150 ease-in">
              <FaUserAlt />
            </div>
          </Link>
          <MdOutlineMenu
            onClick={handleNav}
            className="md:hidden block text-3xl hover:text-green"
          />
        </div>
        {/* Mobile Menu */}
        <div
          className={
            isNavOpen
              ? "md:hidden fixed z-[15] top-0 right-0 w-full h-full bg-black/70 text-lightBlack duration-150 ease-in"
              : "md:hidden fixed z-[15] top-0 -right-[110%] w-full h-full bg-black/70 text-lightBlack duration-150 ease-in"
          }
        >
          <div className="bg-lightWhite p-10 h-full w-[70%] ml-auto flex flex-col items-end justify-between">
            <div
              onClick={handleNav}
              className="bg-lightGreen text-green p-3 rounded-full text-xl hover:text-lightGreen hover:bg-green  duration-150 ease-in cursor-pointer"
            >
              <MdOutlineClose />
            </div>
            <ul className="font-bold text-2xl flex flex-col items-end gap-14">
              <Link href="/">
                <li
                  onClick={handleNav}
                  className="hover:text-green cursor-pointer duration-150 ease-in"
                >
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li
                  onClick={handleNav}
                  className="hover:text-green cursor-pointer duration-150 ease-in"
                >
                  About
                </li>
              </Link>
              <Link href="/courses">
                <li
                  onClick={handleNav}
                  className="hover:text-green cursor-pointer duration-150 ease-in"
                >
                  Courses
                </li>
              </Link>
              <Link href="/contact">
                <li
                  onClick={handleNav}
                  className="hover:text-green cursor-pointer duration-150 ease-in"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="w-full flex items-center justify-between sm:justify-end">
              <Link href="/signin">
                <a className="border-2 border-transparent px-6 py-2 rounded-xl hover:border-green whitespace-nowrap">
                  Sign In
                </a>
              </Link>
              <Link href="/signup">
                <a className="bg-lightGreen px-6 py-2 rounded-xl cursor-pointer hover:bg-green hover:text-lightGreen duration-150 ease-in whitespace-nowrap">
                  Sign Up
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
