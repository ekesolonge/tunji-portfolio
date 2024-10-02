import type { Variants } from "framer-motion";
import * as motion from "framer-motion/client";
import Image from "next/image";

const variants: Variants = {
  hidden: { opacity: 0, translateY: "50%" },
  visible: { opacity: 1, translateY: 0, transition: { duration: 1, ease: "easeOut", delay: 1 } },
};

const Hero = () => {
  return (
    <section className="container relative flex min-h-[calc(100dvh-5.375rem)] flex-col justify-end overflow-hidden pb-[17rem] pt-36 text-[#121212] md:block md:min-h-[calc(100dvh-4.75rem)] md:pb-[7.625rem] md:pt-[8.875rem]">
      <div className="flex-1">
        <div className="relative mb-14 ml-auto max-w-[64.8125rem]">
          <motion.h1
            className="absolute inset-0 size-full text-[2.5rem] leading-[3.1775rem] md:text-[6.5rem] md:leading-[8.25rem]"
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            Olatunji <br /> Tajudeen{" "}
            <span className="inline-block h-[0.1475rem] w-[1.67rem] bg-[#121212] align-middle md:h-1.5 md:w-[4.25rem]" /> Product{" "}
            <br />
            Designer
          </motion.h1>
          {/* Ghost element */}
          <h1 className="text-[2.5rem] leading-[3.1775rem] opacity-0 md:text-[6.5rem] md:leading-[8.25rem]" aria-hidden>
            Olatunji <br /> Tajudeen
            <span className="inline-block h-[0.1475rem] w-[1.67rem] bg-[#121212] align-middle md:h-1.5 md:w-[4.25rem]" /> Product{" "}
            <br />
            Designer
          </h1>
        </div>
        <div className="relative ml-auto max-w-[64.8125rem]">
          <motion.p
            className="absolute inset-0 ml-auto size-full max-w-[15.8125rem] text-xl leading-normal md:max-w-[30.5625rem] md:text-[2.5rem] md:leading-[3.125rem]"
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            <span className="text-[#4D5153B2]">Crafting impactful</span> user experiences{" "}
            <span className="text-[#4D5153B2]">and</span> profitable solutions
          </motion.p>
          {/* Ghost element */}
          <p
            className="ml-auto max-w-[15.8125rem] text-xl leading-normal opacity-0 md:max-w-[30.5625rem] md:text-[2.5rem] md:leading-[3.125rem]"
            aria-hidden
          >
            <span className="text-[#4D5153B2]">Crafting impactful</span> user experiences{" "}
            <span className="text-[#4D5153B2]">and</span> profitable solutions
          </p>
        </div>
        <div className="ml-auto max-w-[64.8125rem] md:relative">
          <motion.div
            className="absolute -bottom-28 left-4 -z-10 size-56 md:-bottom-60 md:size-[21rem]"
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 16, repeat: Infinity }}
            layout
          >
            <Image src="/images/cube.png" alt="cube" fill sizes="(max-width: 768px) 14rem, 21rem" priority />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
