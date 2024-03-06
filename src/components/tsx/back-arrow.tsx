import { BxArrowBack } from "../../assets/icons/tsx/BackArrow";
import { cn } from "../../shared/cn";

function BackArrow({ className, id }: { className?: string; id: string }) {
  return (
    <a
      className={cn(
        "flex cursor-pointer items-center gap-2 text-base text-neutral-500/80 transition-all hover:-translate-y-0.5 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-white",
        className,
      )}
      href={`/projects#${id}`}
    >
      <BxArrowBack className="h-6 w-6 md:h-7 md:w-7" />
      Back
    </a>
  );
}

export default BackArrow;
