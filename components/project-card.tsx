import type { Project } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="relative">
      <div className="relative mb-3 aspect-[343/400] w-full md:mb-6 md:aspect-[584/628]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 343px, 584px"
          quality={100}
        />
      </div>
      <div className="mb-3 space-y-4 border-b border-b-[#D8D9E0] pb-3 md:mb-4 md:space-y-3 md:pb-4">
        <Link href="#" className="after:absolute after:inset-0">
          <h3 className="font-extrabold leading-normal text-[#121212] md:whitespace-pre-wrap md:text-2xl md:font-bold md:tracking-[0.02em]">
            {project.name}
          </h3>
        </Link>
        <p className="whitespace-pre-wrap text-xl leading-normal tracking-wide text-[#4D5153]">{project.description}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {project.tags.map((tag, index) => (
          <p key={index} className="text-sm leading-normal tracking-[0.02em] text-[#4D5153]">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
