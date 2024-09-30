"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import CloseMenuIcon from "@/components/icons/close-menu-icon";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

type Props = {
  isOpen: boolean;
  closeMenu: () => void;
};

const MobileNavbar = ({ isOpen, closeMenu }: Props) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto bg-black px-4 pb-[5.5rem] pt-7 text-white md:hidden"
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
    >
      <div className="mb-[4.625rem]">
        <div className="mb-2.5 flex items-center justify-between">
          <Link href="#" onClick={closeMenu}>
            <Logo className="size-8" />
          </Link>
          <Button
            variant="ghost-inverted"
            className="size-10 p-0 text-white md:hidden"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <CloseMenuIcon />
          </Button>
        </div>
        <div className="h-[0.1875rem] bg-white" />
        <div className="h-0.5 bg-black" />
        <div className="h-[0.1875rem] bg-white" />
      </div>
      <nav className="mb-16">
        <ul className="list-none space-y-3">
          <li>
            <Link
              href="#"
              onClick={closeMenu}
              className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[1.75rem] font-bold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="https://read.cv/teejaay"
              target="_blank"
              onClick={closeMenu}
              className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[1.75rem] font-bold"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              onClick={closeMenu}
              className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[1.75rem] font-bold"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/olatunji-tajudeen"
              target="_blank"
              onClick={closeMenu}
              className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[1.75rem] font-bold"
            >
              Linkedin
            </Link>
          </li>
          <li>
            <Link
              href="https://www.behance.net/tajudeenismail1"
              target="_blank"
              onClick={closeMenu}
              className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[1.75rem] font-bold"
            >
              Behance
            </Link>
          </li>
        </ul>
      </nav>
      <div className="rounded-xl bg-white px-5 py-4 text-center text-black">
        <p className="mb-7 text-2xl font-bold leading-normal">Let us discuss your big idea</p>
        <div className="space-y-1">
          <p className="text-black/70">Send me a mail</p>
          <Link href="mailto:tajudeenismail61@gmail.com" className="font-bold">
            tajudeenismail61@gmail.com
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNavbar;
