"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const MobileNav = () => {
  const pathname = usePathname();

  const linkList = ["", "resume", "project", "contact"];
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mb-40 mt-32 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Rakesh<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8">
          {linkList.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={`/${link}`}
                className={`${pathname === `/${link}` && "border-b-2 border-accent text-accent"} text-xl capitalize transition-all hover:text-accent`}
              >
                {link.length ? link : "Home"}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
