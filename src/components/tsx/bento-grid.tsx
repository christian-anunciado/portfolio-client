import { cn } from "../../shared/cn";
import { DirectionAwareHover } from "./direction-aware-hover";

export type BentoProps = {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  thumbnail?: string;
  icon?: React.ReactNode;
  href?: string;
};

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
  thumbnail,
  icon,
}: BentoProps) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-start space-y-4 rounded-xl border border-transparent bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-zinc-950 dark:shadow-none",
        className,
      )}
    >
      <DirectionAwareHover imageUrl={thumbnail}>
        <p className="text-xl font-bold">{title}</p>
      </DirectionAwareHover>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
