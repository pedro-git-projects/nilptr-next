"use client";

import LogoLight from "../../public/assets/logo/logo-light.svg";
import LogoDark from "../../public/assets/logo/logo-dark.svg";
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const darkMode = resolvedTheme === "dark";
  return (
    <>
      {darkMode ? (
        <Image src={LogoDark} alt={"dark logo"} className="h-8" />
      ) : (
        <Image src={LogoLight} alt={"light logo"} className="h-8" />
      )}
    </>
  );
};

export default Logo;
