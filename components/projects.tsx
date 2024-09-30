import * as motion from "framer-motion/client";
import { Fragment } from "react";

import StarIcon from "@/components/icons/star-icon";
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section id="projects" className="container pb-20 pt-8 md:pt-[4.25rem]">
      <div className="mb-8 overflow-x-hidden border-y border-y-[#D8D9E0] py-[1.375rem] md:mb-[4.25rem] md:py-3.5">
        <motion.div
          className="flex w-max items-center"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ ease: "linear", duration: 12, repeat: Infinity }}
        >
          {Array.from(Array(8).keys()).map(index => (
            <Fragment key={index}>
              <h2 className="mr-5 whitespace-nowrap text-2xl font-normal leading-normal tracking-[0.02em] text-[#4D5153] md:text-[3.5rem] md:tracking-normal">
                Selected Projects
              </h2>
              <StarIcon className="mr-5 size-3 shrink-0 text-[#D9D9D9] md:size-[1.1875rem]" />
            </Fragment>
          ))}
        </motion.div>
      </div>
      <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
