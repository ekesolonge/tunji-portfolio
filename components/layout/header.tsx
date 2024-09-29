"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import MenuIcon from "@/components/icons/menu-icon";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import MobileNavbar from "./mobile-navbar";
import Navbar from "./navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("md:overflow-auto");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("md:overflow-auto");
    }
  }, [isOpen]);

  return (
    <header className="container relative pt-7 md:pt-4">
      <div className="mb-2.5 flex items-center justify-between md:mb-3">
        <Link href="#">
          <Logo className="size-10" />
        </Link>
        <Button
          className="hidden text-xl font-bold uppercase leading-normal md:inline-flex"
          variant="ghost"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? "Close" : "Menu"}
        </Button>
        <Button variant="ghost" className="size-10 p-0 md:hidden" onClick={() => setIsOpen(true)} aria-label="Open menu">
          <MenuIcon />
        </Button>
      </div>
      <div className="h-[0.1875rem] bg-black" />
      <div className="h-0.5 bg-white" />
      <div className="h-[0.1875rem] bg-black" />
      <Navbar isOpen={isOpen} />
      <MobileNavbar isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
