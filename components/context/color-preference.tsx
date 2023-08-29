"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useIsSSR } from "react-aria";

// Define types for the context
export type ColorPreference = "light" | "dark";

interface ColorPreferenceContextType {
  colorPreference: ColorPreference;
  switchColorPreference: () => void;
  setColorPreferenceLight: () => void;
  setColorPreferenceDark: () => void;
}

const ColorPreferenceContext = createContext<
  ColorPreferenceContextType | undefined
>(undefined);

export const useColorPreference = (): ColorPreferenceContextType => {
  const context = useContext(ColorPreferenceContext);
  if (!context) {
    throw new Error(
      "useColorPreference must be used within a ColorPreferenceProvider",
    );
  }
  return context;
};

interface ColorPreferenceProviderProps {
  children: ReactNode;
}

export const ColorPreferenceProvider: React.FC<
  ColorPreferenceProviderProps
> = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorPreference>("dark");

  useEffect(() => {
    const setColorPreference = (
      event: MediaQueryList | MediaQueryListEvent,
    ) => {
      if (event.matches) {
        setColorMode("light");
      } else {
        setColorMode("dark");
      }
    };

    const lightModeQuery = window.matchMedia("(prefers-color-scheme: light)");
    setColorPreference(lightModeQuery); // Initial setup

    lightModeQuery.addEventListener("change", setColorPreference);

    return () => {
      lightModeQuery.removeEventListener("change", setColorPreference);
    };
  }, []);

  const switchColorPreference = () => {
    setColorMode(prevPreference =>
      prevPreference === "light" ? "dark" : "light",
    );
  };

  const setColorPreferenceLight = () => {
    setColorMode("light");
  };

  const setColorPreferenceDark = () => {
    setColorMode("dark");
  };

  const contextValue: ColorPreferenceContextType = {
    colorPreference: colorMode,
    switchColorPreference,
    setColorPreferenceLight,
    setColorPreferenceDark,
  };

  return (
    <ColorPreferenceContext.Provider value={contextValue}>
      {children}
    </ColorPreferenceContext.Provider>
  );
};
