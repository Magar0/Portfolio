"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const linkList = ["", "resume", "project", "contact"];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {linkList.map((ele, ind) => (
        <Link
          key={ind}
          className={`font-medium capitalize transition-all hover:text-accent ${pathname === `/${ele}` ? "border-b-2 border-accent text-accent" : ""}`}
          href={`/${ele}`}
        >
          {ele.length ? ele : "Home"}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
