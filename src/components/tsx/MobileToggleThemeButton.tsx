import { useEffect, useState } from "react";
import { LineMdSunnyOutlineToMoonLoopTransition } from "../../assets/icons/tsx/Moon";
import { LineMdSunnyOutlineLoop } from "../../assets/icons/tsx/Sunny";

type Props = {};

function ToggleThemeButton({}: Props) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

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
    <button onClick={handleClicked}>
      {theme === "dark" ? (
        <LineMdSunnyOutlineLoop className="h-7 w-7" />
      ) : (
        <LineMdSunnyOutlineToMoonLoopTransition className="h-7 w-7" />
      )}
    </button>
  );
}

export default ToggleThemeButton;
