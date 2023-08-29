import { globalStyle } from "@vanilla-extract/css";
import { colorTheme } from "./theme.css";
import { vars } from "./vars.css";

// Reset
const parentElements = ["canvas", "iframe", "img", "svg", "video"];
const childElements = [
  "svg *",
  "symbol *", // Mozilla Firefox Bug
];

globalStyle(`*:not(${[...parentElements, ...childElements].join()})`, {
  all: "unset",
  display: "revert",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("html, body", {
  height: "100%",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

// Global styling
globalStyle("body", {
  margin: "0",
  fontFamily: vars.font.body.fontFamily,
  fontWeight: vars.font.body.fontWeight,
  fontSize: vars.font.body.fontStyle,
  background: colorTheme.surface.base,
  color: colorTheme.on.surface.base,
  padding: "0 16px",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
});

globalStyle("h1, h2, h3, h4, p", {
  margin: 0,
});

globalStyle("main", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  height: "100%",
  maxWidth: "720px",
  margin: "0 auto",
  overflow: "hidden",
});
