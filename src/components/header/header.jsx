import Link from "next/link";
import React from "react";
import Nav from "../nav/nav";
import { Button } from "../ui/button";
import MobileNav from "../nav/mobile-nav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* <h1 className="text-4xl font-semibold">
            Rakesh <span className="text-accent">.</span>
          </h1> */}
          <Image src="/img/signature.png" alt="sign pic" height={100} width={200} />
          <span className=" text-4xl font-semibold text-accent">.</span>
        </Link>

        {/* desktop nav & hire me btn */}
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile view */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
