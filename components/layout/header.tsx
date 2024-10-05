"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";

import MenuIcon from "@/components/icons/menu-icon";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MobileNavbar from "./mobile-navbar";
import Navbar from "./navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useLayoutEffect(() => {
    const hideOverflow = () => {
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("md:overflow-auto");
    };

    const showOverflow = () => {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("md:overflow-auto");
    };

    if (isMobileOpen) hideOverflow();
    else showOverflow();

    return () => {
      showOverflow();
    };
  }, [isMobileOpen]);

  return (
    <motion.header
      className={cn("pt-7 md:pt-4 fixed w-full bg-white z-50 transition-colors duration-400 ease-in", {
        "bg-black text-white": isMobileOpen,
      })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
    >
      <div className="container relative">
        <div>
          <div className="mb-2.5 flex items-center justify-between md:mb-3">
            <Link href="/" onClick={() => setIsMobileOpen(false)}>
              <Logo className="size-8 md:size-10" />
            </Link>
            <Button
              className="hidden text-xl font-bold uppercase leading-normal md:inline-flex"
              variant="ghost"
              onClick={() => setIsOpen(prev => !prev)}
            >
              {isOpen ? "Close" : "Menu"}
            </Button>
            <Button
              variant={isMobileOpen ? "ghost-inverted" : "ghost"}
              className={cn("size-10 p-0 md:hidden transition-colors duration-400 ease-in", { "text-white": isMobileOpen })}
              onClick={() => setIsMobileOpen(prev => !prev)}
              aria-label="Open menu"
            >
              <MenuIcon isOpen={isMobileOpen} />
            </Button>
          </div>
          <motion.div
            className={cn("h-[0.1875rem] mx-auto bg-black transition-colors duration-400 ease-in", isMobileOpen && "bg-white")}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
            layout
          />
          <motion.div
            className={cn("h-0.5 bg-white transition-colors duration-400 ease-in", isMobileOpen && "bg-black")}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
            layout
          />
          <motion.div
            className={cn("h-[0.1875rem] mx-auto bg-black transition-colors duration-400 ease-in", isMobileOpen && "bg-white")}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
            layout
          />
        </div>
        <Navbar isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
        <MobileNavbar isOpen={isMobileOpen} closeMenu={() => setIsMobileOpen(false)} />
      </div>
    </motion.header>
  );
};

export default Header;
