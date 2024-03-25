"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  const SvgClassname = "group-focus:animate-wave group-hover:animate-wave";
  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-slate-700/60 active:!scale-[0.85] group hover:bg-slate-600  dark:bg-zinc-700/50 hover:dark:dark:bg-zinc-700 rounded-full h-9 w-9 transition-all ease-in-out duration-200 flex justify-center items-center"
    >
      {mounted && theme === "dark" ? (
        <Sun className={SvgClassname} />
      ) : (
        <Moon className={SvgClassname} />
      )}
    </button>
  );
};

export default ThemeSwitch;
