import Link from "next/link";

import LinkIcon from "@/components/icons/link-icon";
import { TINKERING } from "@/lib/constants";

const Tinkering = () => {
  return (
    <div className="grid gap-5 md:grid-cols-[17.0625rem_1fr] md:gap-32 lg:gap-[13.5rem]">
      <h2 className="text-2xl font-bold leading-normal tracking-[0.02em] text-[#121212] md:text-[3.5rem] md:font-medium md:leading-[4.75rem] md:tracking-normal">
        Webflow tinkering
      </h2>
      <ul>
        {TINKERING.map(tinkering => (
          <li key={tinkering.name}>
            <TinkeringItem tinkering={tinkering} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const TinkeringItem = ({ tinkering }: { tinkering: (typeof TINKERING)[number] }) => {
  return (
    <div className="flex items-center justify-between border-b border-[#D8D9E0] py-[1.375rem] md:py-5 md:first:border-t">
      <Link href={tinkering.url} target="_blank" className="text-[#4D5153] md:text-xl md:leading-[1.875rem] md:tracking-wide">
        {tinkering.name}
      </Link>
      <Link
        target="_blank"
        href={tinkering.url}
        aria-label={tinkering.name}
        className="grid size-10 place-items-center rounded-full border border-[#D8D9E0] hover:bg-secondary/80 md:size-14"
      >
        <LinkIcon className="size-5" />
      </Link>
    </div>
  );
};

export default Tinkering;
