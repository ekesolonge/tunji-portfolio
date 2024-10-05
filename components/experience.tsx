import { EXPERIENCE } from "@/lib/constants";

const Experience = () => {
  return (
    <div className="grid gap-5 md:grid-cols-[17.0625rem_1fr] md:gap-32 lg:gap-[13.5rem]">
      <h2 className="text-2xl font-bold leading-normal tracking-[0.02em] text-[#121212] md:text-[3.5rem] md:font-medium md:leading-[4.75rem] md:tracking-normal">
        Experience
      </h2>
      <ul>
        {EXPERIENCE.map(experience => (
          <li key={experience.organisation}>
            <ExperienceItem experience={experience} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceItem = ({ experience }: { experience: (typeof EXPERIENCE)[number] }) => {
  return (
    <div className="flex items-center justify-between border-b border-[#D8D9E0] py-4 first:border-t md:py-5">
      <div className="space-y-2">
        <h3 className="font-bold text-[#121212] md:text-xl md:leading-[1.875rem] md:tracking-wide">{experience.organisation}</h3>
        <p className="text-sm leading-normal tracking-[0.02em] text-[#4D5153] md:text-base md:tracking-normal">
          {experience.role}
        </p>
      </div>
      <p className="text-sm leading-normal tracking-[0.02em] text-[#4D5153] md:text-base md:tracking-normal">{experience.year}</p>
    </div>
  );
};

export default Experience;
