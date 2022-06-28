import Link from "next/link";
import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-lightGreen duration-300 ease-in">
      <div className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto py-14 grid md:grid-cols-2 lg:grid-cols-3 gap-20 items-start">
        <div>
          <div className="inline-block">
            <Link href="/">
              <p className="text-3xl font-bold tracking-wider cursor-pointer">
                <span className="text-green">E</span>duca
              </p>
            </Link>
          </div>
          <p className="text-[1rem] md:text-lg text-lightBlack mt-6 mb-4">
            Follow us on social media to hear the latest news about education!
          </p>
          <div className="flex items-center gap-2">
            <div className="bg-green text-lightGreen p-4 text-2xl rounded hover:bg-lightBlack cursor-pointer duration-150 ease-in">
              <Link href="/">
                <FaTwitter />
              </Link>
            </div>
            <div className="bg-green text-lightGreen p-4 text-2xl rounded hover:bg-lightBlack cursor-pointer duration-150 ease-in">
              <Link href="/">
                <FaFacebookF />
              </Link>
            </div>
            <div className="bg-green text-lightGreen p-4 text-2xl rounded hover:bg-lightBlack cursor-pointer duration-150 ease-in">
              <Link href="/">
                <FaInstagram />
              </Link>
            </div>
            <div className="bg-green text-lightGreen p-4 text-2xl rounded hover:bg-lightBlack cursor-pointer duration-150 ease-in">
              <Link href="/">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="text-xl font-bold text-black mb-6">Useful Links</h2>
          <ul className="text-lightBlack space-y-3">
            <Link href="/">
              <li className="hover:text-green hover:underline cursor-pointer duration-150 ease-in">
                Help Center
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-green hover:underline cursor-pointer duration-150 ease-in">
                Ask Questions
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-green hover:underline cursor-pointer duration-150 ease-in">
                Send Feedback
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-green hover:underline cursor-pointer duration-150 ease-in">
                Private Policy
              </li>
            </Link>
            <Link href="/">
              <li className="hover:text-green hover:underline cursor-pointer duration-150 ease-in">
                Terms of Use
              </li>
            </Link>
          </ul>
        </div>

        <div className="">
          <h2 className="text-xl font-bold text-black">Newsletter</h2>
          <p className="text-lightBlack text-[1rem] md:text-lg mt-6 mb-4">
            Subscribe for the latest news!
          </p>
          <form className="flex flex-col items-start gap-4">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="py-2 px-4 rounded border border-green focus:outline focus:outline-green-500"
              id="email"
              type="email"
              required
              placeholder="Type your Email"
            />
            <button className="text-[1rem] text-green px-6 py-3 rounded border-2 border-green hover:bg-green hover:text-lightGreen focus:outline focus:outline-green-500">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
