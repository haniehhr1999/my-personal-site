import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="rounded-md bg-slate-400 px-5 py-3">
      <ul className="flex">
        <li className="mx-3 cursor-pointer">
          <Link href="">درباره من</Link>
        </li>
        <li className="mx-3 cursor-pointer">
          <Link href="">رزومه</Link>
        </li>
        <li className="mx-3 cursor-pointer">
          <Link href="">پورتفولیو</Link>
        </li>
        <li className="mx-3 cursor-pointer">
          <Link href="">مقالات</Link>
        </li>
        <li className="mx-3 cursor-pointer">
          <Link href="">ارتباط با من</Link>
        </li>
        <li className="mx-3 cursor-pointer">
          <Link href="">مدارک</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
