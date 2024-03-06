import getCurrentTime from "../../hooks/getCurrentTime";

function CurrentTimeHeader() {
  const { phTime } = getCurrentTime();

  return (
    <div className="sticky left-0 top-0 z-40 max-h-[30px] w-full bg-sky-200 py-1.5 text-xs text-black/80 dark:bg-sky-50 dark:text-black">
      <div className="flex w-full items-center justify-center">
        Hello, it's currently <span className="mx-1 font-medium">{phTime}</span>{" "}
        in my timezone.
      </div>
    </div>
  );
}

export default CurrentTimeHeader;
