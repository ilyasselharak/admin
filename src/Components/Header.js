import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

import { FiMenu } from "react-icons/fi";
import { useState } from "react";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`  duration-500   top-0 shadow-shad left-0 z-[1] w-full`}>
        <div className="md:flex items-center bg-mycustomcolor border-b py-4 border-red-400 justify-around">
          <Link href="/">
            <div className="flex text-white text-2xl ml-2 items-center">
              IP
              <Image src="/logo.png" alt="logo iptv" width={70} height={70} />
            </div>
          </Link>
          <div className=" flex gap-2 absolute right-8 top-6 md:hidden">
            <div
              onClick={() => setOpen(!open)}
              className="text-white text-3xl  cursor-pointer "
            >
              {open ? <AiOutlineClose /> : <FiMenu />}
            </div>
          </div>
          <ul
            id="navbar"
            className={`md:flex bg-mycustomcolor text-red-600 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20" : "top-[-412px]"
            }`}
          >
            <li
              className={`md:ml-8 md:my-0 my-7 ${
                open ? "hover:border-b hover:border-red-300 hover:text-xl" : ""
              }`}
            >
              <Link href={"/"} className={` duration-500   `}>
                HOME
              </Link>
            </li>

            <li
              className={`md:ml-8 md:my-0 my-7 ${
                open ? "hover:border-b hover:border-red-300 hover:text-xl" : ""
              }`}
            >
              <Link
                scroll={false}
                onClick={() => setOpen(!open)}
                href={"/orders"}
                className={` duration-500   `}
              >
                Orders
              </Link>
            </li>
            <li
              className={`md:ml-8 md:my-0 my-7 ${
                open ? "hover:border-b hover:border-red-300 hover:text-xl" : ""
              }`}
            >
              <Link
                onClick={() => setOpen(!open)}
                href={"/inbox"}
                className={` duration-500   `}
              >
                INBOX
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
