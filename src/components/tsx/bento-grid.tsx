import type { Project } from "../../features/projects/projects";
import { cn } from "../../shared/cn";
import { DirectionAwareHover } from "./direction-aware-hover";

export type BentoProps = Pick<
  Project,
  "title" | "description" | "projectImg" | "href"
> & { icon?: string; className?: string };

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 p-10 md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  projectImg,
  icon,
  href,
  children,
}: BentoProps & {
  children: React.ReactNode;
}) => {
  return (
    <a
      className={cn(
        "group/bento shadow-input row-span-1 flex cursor-pointer flex-col justify-start space-y-4 rounded-xl border border-transparent bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-zinc-950 dark:shadow-none",
        className,
      )}
      href={href}
    >
      <DirectionAwareHover imageUrl={projectImg}>
        <p className="text-lg font-bold">{title}</p>
        <p className="!text-xs font-medium">Click to Learn More</p>
      </DirectionAwareHover>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        {children}
      </div>
    </a>
  );
};
