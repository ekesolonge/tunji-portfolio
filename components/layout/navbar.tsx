"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useClickAway } from "@/hooks/use-click-away";

type Props = {
  isOpen: boolean;
  closeMenu: () => void;
};

const Navbar = ({ isOpen, closeMenu }: Props) => {
  const pathname = usePathname();

  const ref = useClickAway(e => {
    const element = e.target as HTMLButtonElement;
    if (element.textContent !== "Close") closeMenu();
  });

  return (
    <motion.nav
      ref={ref}
      className="absolute right-0 z-50 mr-8 mt-4 hidden max-w-md space-y-7 overflow-hidden bg-black text-white md:block lg:mr-16 xl:mr-20 2xl:mr-[7.5rem]"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
      layout
    >
      <div className="p-8">
        <div>
          <ul className="list-none space-y-2">
            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[2rem] font-bold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="https://drive.google.com/file/d/1VyyiKOUt9wGsE5M7T3uyDfny0loow7Bu/view?usp=sharing"
                target="_blank"
                onClick={closeMenu}
                className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[2rem] font-bold"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href={pathname === "/" ? "#projects" : "/#projects"}
                onClick={closeMenu}
                className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[2rem] font-bold"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/olatunji-tajudeen"
                target="_blank"
                onClick={closeMenu}
                className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[2rem] font-bold"
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link
                href="https://www.behance.net/tajudeenismail1"
                target="_blank"
                onClick={closeMenu}
                className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[2rem] font-bold"
              >
                Behance
              </Link>
            </li>
          </ul>
        </div>
        <div className="rounded-[1.25rem] bg-white px-5 py-4 text-center text-black">
          <p className="mb-4 text-[1.75rem] font-bold">Let us discuss your big idea</p>
          <div className="space-y-1">
            <p className="text-black/50">Send me a mail</p>
            <Link href="mailto:tajudeenismail61@gmail.com">tajudeenismail61@gmail.com</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
