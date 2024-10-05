"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  closeMenu: () => void;
};

const MobileNavbar = ({ isOpen, closeMenu }: Props) => {
  const pathname = usePathname();

  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") closeMenu();
    });
  }, [closeMenu]);

  return (
    <motion.div
      className="fixed inset-0 mt-[5.375rem] overflow-hidden bg-black text-white md:hidden"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
      layout
    >
      <div className="container pb-[5.5rem] pt-7">
        <nav className="mb-16">
          <ul className="list-none space-y-3">
            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[1.75rem] font-bold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={pathname === "/" ? "#projects" : "/#projects"}
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
      </div>
    </motion.div>
  );
};

export default MobileNavbar;
