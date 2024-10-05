import { cn } from "@/lib/utils";

type Props = {
  title: string;
  content: string;
  className?: React.ComponentProps<"div">["className"];
};

const TextBlock = ({ title, content, className }: Props) => {
  return (
    <div className="mx-auto grid max-w-[62.25rem] gap-2 md:grid-cols-[21rem_1fr]">
      <h2 className="text-xl font-bold leading-[1.875rem] tracking-wide text-[#121212]">{title}</h2>
      {content && (
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className={cn(
            "space-y-4 [&>ol>li]:font-bold [&>ol>li]:text-[#121212] md:[&>ol>li]:text-xl md:[&>ol>li]:leading-[1.875rem] md:[&>ol>li]:tracking-wide [&>ol]:list-decimal [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-4 [&>ol]:space-y-2 [&>ol]:pl-4 md:[&_p]:text-xl md:[&_p]:leading-[1.875rem] md:[&_p]:tracking-wide md:text-xl md:leading-[1.875rem] md:tracking-wide",
            className
          )}
        />
      )}
    </div>
  );
};

export default TextBlock;
