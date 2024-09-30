import * as motion from "framer-motion/client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container relative flex min-h-[calc(100dvh-5.375rem)] flex-col justify-end overflow-hidden pb-[17rem] pt-36 text-[#121212] md:block md:min-h-[calc(100dvh-4.75rem)] md:pb-[7.625rem] md:pt-[9.875rem]">
      <div className="ml-auto max-w-[64.8125rem] flex-1 md:relative">
        <h1 className="mb-14 text-[2.5rem] leading-[3.1775rem] md:text-[6.5rem] md:leading-[8.25rem]">
          Olatunji <br /> Tajudeen{" "}
          <span className="inline-block h-[0.1475rem] w-[1.67rem] bg-[#121212] align-middle md:h-1.5 md:w-[4.25rem]" /> Product{" "}
          <br />
          Designer
        </h1>
        <p className="ml-auto max-w-[15.8125rem] text-xl leading-normal md:max-w-[30.5625rem] md:text-[2.5rem] md:leading-[3.125rem]">
          <span className="text-[#4D5153B2]">Crafting impactful</span> user experiences{" "}
          <span className="text-[#4D5153B2]">and</span> profitable solutions
        </p>
        <motion.div
          className="absolute bottom-4 left-4 -z-10 size-56 md:-bottom-60 md:size-[21rem]"
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 16, repeat: Infinity }}
          layout
        >
          <Image src="/images/cube.png" alt="cube" fill sizes="(max-width: 768px) 14rem, 21rem" priority />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
