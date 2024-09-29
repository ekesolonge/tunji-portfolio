import Image from "next/image";
import Link from "next/link";

import RightArrowIcon from "@/components/icons/right-arrow-icon";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container space-y-10 pt-8 md:space-y-[4.5rem] md:pt-20">
        <section className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-[37.9375rem] text-[2rem] leading-[2.625rem] md:text-7xl md:leading-[5.5rem]">
            Let us discuss your big idea.{" "}
            <Link
              href="#"
              className="group flex items-center gap-4 text-white/50 underline transition-all duration-300 ease-in hover:text-white md:no-underline"
            >
              Email me{" "}
              <RightArrowIcon className="relative -left-10 hidden text-transparent transition-all duration-300 ease-in group-hover:left-0 group-hover:text-white md:block" />
            </Link>
          </h2>
          <nav>
            <ul className="group list-none space-y-4">
              <li>
                <Link href="#" className="transition-colors duration-300 ease-in hover:!text-white group-hover:text-[#333333]">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors duration-300 ease-in hover:!text-white group-hover:text-[#333333]">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors duration-300 ease-in hover:!text-white group-hover:text-[#333333]">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors duration-300 ease-in hover:!text-white group-hover:text-[#333333]">
                  Behance
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="flex flex-col-reverse gap-4 border-t border-t-white pb-6 pt-4 text-xs leading-normal tracking-[0.02em] md:flex-row md:items-center md:justify-between md:pt-6 md:text-base">
          <p className="uppercase">© {new Date().getFullYear()} OLATUNJI TAJUDEEN</p>
          <p className="flex items-center gap-[1ch] leading-loose md:leading-normal">
            Till the <mark className="border border-[#242400] bg-[#FFFF0036] px-0.5 text-[#CECEAA] md:px-1">dots connect</mark>{" "}
            and the <mark className="border border-[#242400] bg-[#FFFF0036] px-0.5 text-[#CECEAA] md:px-1">pixels perfect</mark>{" "}
            <Image src="/pen.png" width={72} height={72} alt="pen" className="size-5" />
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
