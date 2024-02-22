"use client";

import LogoLight from "../../public/assets/logo/logo-light.svg";
import LogoDark from "../../public/assets/logo/logo-dark.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Logo: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [storedTheme, setStoredTheme] = useState<string | undefined>("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      setStoredTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    // @ts-ignore
    localStorage.setItem("theme", resolvedTheme);
    setStoredTheme(resolvedTheme);
  }, [resolvedTheme]);

  const darkMode = storedTheme === "dark";

  return (
    <>
      {darkMode ? (
        <Image src={LogoDark} alt="dark logo" width={32} height={32} />
      ) : (
        <Image src={LogoLight} alt="light logo" width={32} height={32} />
      )}
    </>
  );
};

export default Logo;
