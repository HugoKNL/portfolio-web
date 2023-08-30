"use client";
import { ColorPreference } from "./color-preference";
import { useEffect } from "react";

export const useDynamicMetaTheme = ({
  colorPreference,
}: {
  colorPreference: ColorPreference;
}) => {
  useEffect(() => {
    const head = document.querySelector("head");
    if (head) {
      const color = colorPreference === "light" ? "#F8FAF6" : "#111412";
      const prevElement = document.getElementById("theme-color-meta");
      if (prevElement) {
        prevElement.setAttribute("name", "theme-color");
        prevElement.setAttribute("content", color);
      } else {
        const meta = document.createElement("meta");
        meta.id = "theme-color-meta";
        meta.setAttribute("name", "theme-color");
        meta.setAttribute("content", color);
        head.appendChild(meta);
      }
    }
  }, [colorPreference]);
};
