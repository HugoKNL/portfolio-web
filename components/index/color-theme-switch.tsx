"use client";
import { useColorPreference } from "../context/color-preference";
import { Switch } from "../shared/switch/switch";

export const ColorThemeSwitch = (
  props: React.ComponentProps<typeof Switch>,
) => {
  const { colorPreference, switchColorPreference } = useColorPreference();
  return (
    <Switch
      checked={colorPreference === "light"}
      onClick={() => switchColorPreference()}
      variant="themeSwitch"
      {...props}
    />
  );
};
