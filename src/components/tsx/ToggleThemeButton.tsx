import { useEffect, useState } from "react";
import { LineMdSunnyOutlineToMoonLoopTransition } from "../../assets/icons/tsx/Moon";
import { LineMdSunnyOutlineLoop } from "../../assets/icons/tsx/Sunny";

type Props = {};

function ToggleThemeButton({}: Props) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("dark");

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  const handleClicked = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
    window.dispatchEvent(new Event("storage"));
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
