import { colorTheme } from "@/app/theme/theme.css";
import { style } from "@vanilla-extract/css";
import { vars } from "@/app/theme/vars.css";

export const header = style({
  // create fixed header
  position: "fixed",
  display: "flex",
  padding: vars.spacing.large,
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  // create gradient background
  background: colorTheme.container.surface.low,
});
