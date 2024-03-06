import { useEffect, useState } from "react";
import { LineMdSunnyOutlineToMoonLoopTransition } from "../../assets/icons/tsx/Moon";
import { LineMdSunnyOutlineLoop } from "../../assets/icons/tsx/Sunny";

type Props = {};

function ToggleThemeButton({}: Props) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("dark");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  const handleClicked = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <button
      className="hidden items-center gap-5 text-gray-600 transition-all hover:scale-105 hover:font-medium hover:text-gray-900 md:flex dark:text-gray-300 dark:hover:text-white"
      onClick={handleClicked}
    >
      {theme === "dark" ? (
        <LineMdSunnyOutlineLoop className="h-6 w-6" />
      ) : (
        <LineMdSunnyOutlineToMoonLoopTransition className="h-6 w-6" />
      )}
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ToggleThemeButton;
