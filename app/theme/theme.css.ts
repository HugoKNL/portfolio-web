import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { vars } from "./vars.css";

export const colorTheme = createThemeContract({
  primary: null,
  secondary: null,
  tertiary: null,
  error: null,
  surface: {
    dim: null,
    base: null,
    bright: null,
    inverse: null,
  },
  container: {
    primary: null,
    secondary: null,
    tertiary: null,
    error: null,
    surface: {
      lowest: null,
      low: null,
      base: null,
      high: null,
      highest: null,
    },
  },
  fixed: {
    base: {
      primary: null,
      secondary: null,
      tertiary: null,
    },
    dim: {
      primary: null,
      secondary: null,
      tertiary: null,
    },
  },
  outline: {
    base: null,
    variant: null,
  },
  scrim: null,
  shadow: null,
  on: {
    primary: null,
    secondary: null,
    tertiary: null,
    error: null,
    surface: {
      base: null,
      variant: null,
      inverse: {
        base: null,
        primary: null,
      },
    },
    container: {
      primary: null,
      secondary: null,
      tertiary: null,
      error: null,
      surface: {
        base: null,
        variant: null,
      },
    },
    fixed: {
      primary: {
        base: null,
        variant: null,
      },
      secondary: {
        base: null,
        variant: null,
      },
      tertiary: {
        base: null,
        variant: null,
      },
    },
  },
});

const fixed = {
  base: {
    primary: vars.color.primary[90],
    secondary: vars.color.secondary[90],
    tertiary: vars.color.tertiary[90],
  },
  dim: {
    primary: vars.color.primary[80],
    secondary: vars.color.secondary[80],
    tertiary: vars.color.tertiary[80],
  },
};

const onFixed = {
  primary: {
    base: vars.color.primary[10],
    variant: vars.color.primary[30],
  },
  secondary: {
    base: vars.color.secondary[10],
    variant: vars.color.secondary[30],
  },
  tertiary: {
    base: vars.color.tertiary[10],
    variant: vars.color.tertiary[30],
  },
};

export const colorThemeLight = createTheme(colorTheme, {
  primary: vars.color.primary[40],
  secondary: vars.color.secondary[40],
  tertiary: vars.color.tertiary[40],
  error: vars.color.error[40],
  surface: {
    dim: vars.color.neutral[87],
    base: vars.color.neutral[98],
    bright: vars.color.neutral[98],
    inverse: vars.color.neutral[20],
  },
  container: {
    primary: vars.color.primary[90],
    secondary: vars.color.secondary[90],
    tertiary: vars.color.tertiary[90],
    error: vars.color.error[90],
    surface: {
      lowest: vars.color.neutral[100],
      low: vars.color.neutral[96],
      base: vars.color.neutral[94],
      high: vars.color.neutral[92],
      highest: vars.color.neutral[90],
    },
  },
  fixed,
  outline: {
    base: vars.color["neutral-variant"][50],
    variant: vars.color["neutral-variant"][80],
  },
  scrim: vars.color.neutral[0],
  shadow: vars.color.neutral[0],
  on: {
    primary: vars.color.primary[100],
    secondary: vars.color.secondary[100],
    tertiary: vars.color.tertiary[100],
    error: vars.color.error[100],
    surface: {
      base: vars.color.neutral[10],
      variant: vars.color["neutral-variant"][30],
      inverse: {
        base: vars.color.neutral[95],
        primary: vars.color.primary[80],
      },
    },
    container: {
      primary: vars.color.primary[10],
      secondary: vars.color.secondary[10],
      tertiary: vars.color.tertiary[10],
      error: vars.color.error[10],
      surface: {
        base: vars.color.neutral[10],
        variant: vars.color["neutral-variant"][30],
      },
    },
    fixed: onFixed,
  },
});

export const colorThemeDark = createTheme(colorTheme, {
  primary: vars.color.primary[80],
  secondary: vars.color.secondary[80],
  tertiary: vars.color.tertiary[80],
  error: vars.color.error[80],
  surface: {
    dim: vars.color.neutral[6],
    base: vars.color.neutral[6],
    bright: vars.color.neutral[24],
    inverse: vars.color.neutral[20],
  },
  container: {
    primary: vars.color.primary[30],
    secondary: vars.color.secondary[30],
    tertiary: vars.color.tertiary[30],
    error: vars.color.error[30],
    surface: {
      lowest: vars.color.neutral[4],
      low: vars.color.neutral[10],
      base: vars.color.neutral[12],
      high: vars.color.neutral[17],
      highest: vars.color.neutral[22],
    },
  },
  fixed,
  outline: {
    base: vars.color.neutral[60],
    variant: vars.color["neutral-variant"][80],
  },
  scrim: vars.color.neutral[0],
  shadow: vars.color.neutral[0],
  on: {
    primary: vars.color.primary[20],
    secondary: vars.color.secondary[20],
    tertiary: vars.color.tertiary[20],
    error: vars.color.error[20],
    surface: {
      base: vars.color.neutral[90],
      variant: vars.color["neutral-variant"][80],
      inverse: {
        base: vars.color.neutral[95],
        primary: vars.color.neutral[80],
      },
    },
    container: {
      primary: vars.color.primary[90],
      secondary: vars.color.secondary[90],
      tertiary: vars.color.tertiary[90],
      error: vars.color.error[90],
      surface: {
        base: vars.color.neutral[90],
        variant: vars.color["neutral-variant"][80],
      },
    },
    fixed: onFixed,
  },
});
