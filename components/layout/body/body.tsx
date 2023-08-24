"use client";
import { colorThemeDark, colorThemeLight } from "@/app/theme/theme.css";
import { useColorPreference } from "@/components/context/color-preference";

export const ThemedBody = ({ children }: { children: React.ReactNode }) => {
  const { colorPreference } = useColorPreference();

  return (
    <body
      className={colorPreference === "light" ? colorThemeLight : colorThemeDark}
    >
      {children}
    </body>
  );
};
