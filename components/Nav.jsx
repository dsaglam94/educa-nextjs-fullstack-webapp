import Link from "next/link";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import UserPicture from "./navUser/UserPicture";

const Nav = () => {
  const { data: session } = useSession();
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
          <UserPicture />
          <MdOutlineMenu
            onClick={handleNav}
            className="md:hidden block text-3xl hover:text-green"
          />
        </div>
        {/* Mobile Menu */}
        <div
          className={
            isNavOpen
              ? "md:hidden fixed z-[15] top-0 right-0 w-full h-full bg-black/70 pointer-events-none select-none text-lightBlack duration-150 ease-in"
              : "md:hidden fixed z-[15] top-0 right-0 w-full h-full bg-black/0 pointer-events-none select-none text-lightBlack duration-150 ease-in"
          }
        >
          <div
            className={
              isNavOpen
                ? "absolute top-0 right-0 z-20 bg-white p-10 h-full w-[70%] ml-auto flex flex-col items-end justify-between pointer-events-auto duration-300 ease-in-out"
                : "absolute top-0 -right-[110%] z-20 bg-white p-10 h-full w-[70%] ml-auto flex flex-col items-end justify-between pointer-events-auto duration-300 ease-in-out"
            }
          >
            <div
              onClick={handleNav}
              className="bg-green text-lightGreen p-3 rounded-full text-xl hover:text-lightGreen hover:bg-lightBlack  duration-150 ease-in cursor-pointer group"
            >
              <MdOutlineClose className="group-hover:rotate-90 duration-300 ease-in" />
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
            <div
              className={
                session
                  ? "w-full flex items-center justify-between sm:justify-end gap-4"
                  : null
              }
            >
              <Link href="/login">
                <a
                  onClick={handleNav}
                  className="bg-green border-2 border-transparent text-lightGreen font-bold text-lg tracking-wide px-6 py-2 rounded-xl cursor-pointer hover:border-green hover:bg-lightGreen hover:text-green duration-150 ease-in whitespace-nowrap"
                >
                  Sign In
                </a>
              </Link>
              {session && (
                <a
                  onClick={() => signOut()}
                  className="bg-lightGreen border-green border-2 px-6 text-lg font-bold tracking-wide py-2 rounded-xl hover:border-transparent hover:bg-lightBlack hover:text-lightGreen whitespace-nowrap cursor-pointer"
                >
                  Sign Out
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
