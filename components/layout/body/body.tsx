"use client";
import { useColorPreference } from "@/components/context/color-preference";
import { colorThemeDark, colorThemeLight } from "@/app/theme/theme.css";
import { useDynamicMetaTheme } from "../../context/dynamic-meta-theme";

export const ThemedBody = ({ children }: { children: React.ReactNode }) => {
  const { colorPreference } = useColorPreference();
  useDynamicMetaTheme({ colorPreference });
  return (
    <body
      className={colorPreference === "light" ? colorThemeLight : colorThemeDark}
    >
      {children}
    </body>
  );
};
