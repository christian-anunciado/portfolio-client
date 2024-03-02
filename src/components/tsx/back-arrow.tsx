import { BxArrowBack } from "../../assets/icons/tsx/BackArrow";
import { cn } from "../../shared/cn";

function BackArrow({ className }: { className?: string }) {
  const onClick = () => {
    window.history.back();
  };
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center gap-2 text-base text-neutral-400 transition-all hover:-translate-y-0.5 hover:text-white",
        className,
      )}
      onClick={onClick}
    >
      <BxArrowBack className="h-6 w-6 md:h-7 md:w-7" />
      Back
    </div>
  );
}

export default BackArrow;
