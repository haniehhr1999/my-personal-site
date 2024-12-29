import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="rounded-md bg-slate-400 px-5 py-3 flex items-center justify-between">
      <ul className="flex">
        <li className="mx-3 cursor-pointer">
          <Link href="/" className="text-blue-900 font-bold">درباره من</Link>
        </li>
        <li className="mx-3 cursor-pointer">
          <Link href="/resume">رزومه</Link>
        </li>
        <li className="mx-3 cursor-pointer">
          <Link href="/portfolio">نمونه کارها</Link>
        </li>
        <li className="mx-3 cursor-pointer">
          <Link href="/blogs">مقالات</Link>
        </li>
        <li className="mx-3 cursor-pointer">
          <Link href="">ارتباط با من</Link>
        </li>
        <li className="mx-3 cursor-pointer">
          <Link href="/certificate">مدارک</Link>
        </li>
      </ul>

      <i className="fa fa-sun-o cursor-pointer" aria-hidden="true"></i>

    </nav>
  );
};

export default Navbar;
