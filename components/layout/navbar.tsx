import * as motion from "framer-motion/client";
import Link from "next/link";

type Props = {
  isOpen: boolean;
};

const Navbar = ({ isOpen }: Props) => {
  return (
    <motion.div
      className="container absolute right-0 z-50 hidden overflow-hidden md:block"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ type: "tween", duration: 0.4, ease: "easeIn" }}
      layout
    >
      <div className="ml-auto mt-4 w-full max-w-md space-y-7 bg-black p-8 text-white">
        <nav>
          <ul className="list-none space-y-2">
            <li>
              <Link href="#" className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[2rem] font-bold">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[2rem] font-bold">
                Resume
              </Link>
            </li>
            <li>
              <Link href="#" className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[2rem] font-bold">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#" className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[2rem] font-bold">
                Linkedin
              </Link>
            </li>
            <li>
              <Link href="#" className="inline-block w-full border-b border-b-white/30 px-2 pb-4 pt-5 text-[2rem] font-bold">
                Behance
              </Link>
            </li>
          </ul>
        </nav>
        <div className="rounded-[1.25rem] bg-white px-5 py-4 text-center text-black">
          <p className="mb-4 text-[1.75rem] font-bold">Let us discuss your big idea</p>
          <div className="space-y-1">
            <p className="text-black/50">Send me a mail</p>
            <Link href="mailto:tajudeenismail61@gmail.com">tajudeenismail61@gmail.com</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
