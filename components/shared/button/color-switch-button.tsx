"use client";
import { useColorPreference } from "@/components/context/color-preference";
import { Button } from "./button";

export const ColorSwitchButton = (props: React.ComponentProps<"button">) => {
  const { switchColorPreference } = useColorPreference();
  return <Button {...props} onClick={switchColorPreference} />;
};
