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
