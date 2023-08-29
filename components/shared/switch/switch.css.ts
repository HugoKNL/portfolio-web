import { colorTheme } from "@/app/theme/theme.css";
import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/app/theme/vars.css";

export const root = style({
  background: colorTheme.primary,
  borderRadius: vars.radius.xlarge,
  width: 42,
  height: 25,
  //   borderRadius: '9999px',
  position: "relative",
  //   boxShadow: `0 2px 10px ${colorTheme.shadow}`,
  willChange: "background",
  WebkitTapHighlightColor: "transparent",
  transition: "color 300ms, background 300ms",
  selectors: {
    '&[data-focus-visible="true"]:focus': {
      outline: `${colorTheme.outline.base} solid 2px`,
      outlineOffset: "2px",
    },
    '&[data-state="checked"]': {
      backgroundColor: colorTheme.container.primary,
    },
    "&[data-disabled]": {
      backgroundColor: colorTheme.container.surface.highest,
    },
  },
});

export const thumb = style({
  background: colorTheme.on.primary,
  borderRadius: vars.radius.xlarge,
  display: "flex",
  width: 21,
  height: 21,
  backgroundColor: "white",
  transition: "transform 300ms, background 300ms, color 300ms, opacity 300ms",
  transform: "translateX(2px)",
  willChange: "transform, color, background",
  selectors: {
    '&[data-state="checked"]': {
      transform: "translateX(19px)",
      background: colorTheme.on.container.surface.variant,
      color: colorTheme.container.primary,
    },
    "&[data-disabled]": {
      background: colorTheme.on.container.surface.variant,
      opacity: "20%",
    },
  },
});

export const themeRoot = style({
  willChange: "color, background",
});

export const themeThumb = style({
  background: colorTheme.on.primary,
  borderRadius: vars.radius.xlarge,
  alignItems: "center",
  justifyContent: "center",
  color: colorTheme.primary,
});

export const rootVariant = styleVariants({
  primary: [root],
  themeSwitch: [root, themeRoot],
});

export const thumbVariant = styleVariants({
  primary: [thumb],
  themeSwitch: [thumb, themeThumb],
});

export const themeIconContainer = style({
  position: "relative",
  width: vars.spacing.medium,
  height: vars.spacing.medium,
});

export const themeIcon = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: vars.spacing.medium,
  height: vars.spacing.medium,
  willChange: "opacity",
});

export const checkedIcon = style({});

export const uncheckedIcon = style({});

globalStyle(`${thumb}[data-state="unchecked"] ${checkedIcon}`, {
  opacity: 0,
});

globalStyle(`${thumb}[data-state="checked"] ${uncheckedIcon}`, {
  opacity: 0,
});
