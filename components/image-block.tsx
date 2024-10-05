import Image from "next/image";

import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: React.ComponentProps<"div">["className"];
  objectFit?: "object-cover" | "object-contain";
  priority?: boolean;
};

const ImageBlock = ({ src, alt, className, objectFit = "object-contain", priority }: Props) => {
  return (
    <div className={cn("relative w-full", className)}>
      <Image src={src} alt={alt} fill className={objectFit} sizes="100vw" quality={100} priority={priority} />
    </div>
  );
};

export default ImageBlock;
