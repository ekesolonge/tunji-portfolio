import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  alt: string;
  className?: React.ComponentProps<"div">["className"];
};

const GridBlock = ({ title, description, image, alt, className }: Props) => {
  return (
    <div
      className={cn(
        "grid gap-6 md:gap-[4rem] lg:gap-[10.125rem] pb-6 md:pb-10 border-[#D8D9E0] border-b md:grid-cols-[21.0625rem_1fr]",
        className
      )}
    >
      <div className="space-y-2 place-self-center md:space-y-4">
        <h2 className="text-xl font-bold leading-[1.875rem] tracking-wide text-[#121212]">{title}</h2>
        <p className="md:text-xl md:leading-[1.875rem] md:tracking-wide">{description}</p>
      </div>
      <div className="px-3.5 md:px-0">
        <div className="relative aspect-[314.7/305] w-full md:aspect-[695.72/675] ">
          <Image src={image} alt={alt} fill className="object-contain" sizes="100vw" quality={100} />
        </div>
      </div>
    </div>
  );
};

export default GridBlock;
