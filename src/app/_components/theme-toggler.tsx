"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import TogglerPlaceholder from "./toggler-placeholder";

const ThemeToggler: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(theme === "dark");
  useEffect(() => setMounted(true), []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setTheme(darkMode ? "light" : "dark");
  };

  if (!mounted) return <TogglerPlaceholder />;

  return (
    <label className="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]">
      <input
        type="checkbox"
        id="DarkModeToggle"
        className="peer sr-only"
        checked={!darkMode}
        onChange={toggleDarkMode}
      />

      <span
        className={`absolute inset-0 rounded-full bg-gray-300 transition ${
          darkMode ? "peer-checked:bg-white" : "peer-checked:bg-yellow-500"
        }`}
      ></span>

      <span
        className={`absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all flex items-center justify-center ${
          darkMode ? "peer-checked:start-1" : "peer-checked:start-6"
        }`}
      >
        {darkMode ? (
          <FiMoon className="text-gray-700" />
        ) : (
          <FiSun className="text-yellow-500" />
        )}
      </span>
    </label>
  );
};
export default ThemeToggler;
