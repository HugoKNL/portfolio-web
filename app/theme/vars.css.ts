// For explanation on the color theme and usage, see https://m3.material.io/styles/color/the-color-system/color-roles

// For viewing the color palette visualized, see https://www.figma.com/file/hLEpH7C2jvov6x90VjOqMF/Material-Theme-Builder-playground-(Copy)?type=design&node-id=1%3A732&mode=design&t=E5yAqfOh84aw1wbS-1
// When clicking on the figma logo left top, you can select the Material Theme Builder extension to change the theme.

import { pxToRem } from "@/utils/styleUtils";
import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    primary: {
      0: null,
      4: null,
      5: null,
      6: null,
      10: null,
      12: null,
      17: null,
      20: null,
      22: null,
      24: null,
      25: null,
      30: null,
      35: null,
      40: null,
      50: null,
      60: null,
      70: null,
      80: null,
      87: null,
      90: null,
      92: null,
      94: null,
      95: null,
      96: null,
      98: null,
      99: null,
      100: null,
    },
    secondary: {
      0: null,
      4: null,
      5: null,
      6: null,
      10: null,
      12: null,
      17: null,
      20: null,
      22: null,
      24: null,
      25: null,
      30: null,
      35: null,
      40: null,
      50: null,
      60: null,
      70: null,
      80: null,
      87: null,
      90: null,
      92: null,
      94: null,
      95: null,
      96: null,
      98: null,
      99: null,
      100: null,
    },
    tertiary: {
      0: null,
      4: null,
      5: null,
      6: null,
      10: null,
      12: null,
      17: null,
      20: null,
      22: null,
      24: null,
      25: null,
      30: null,
      35: null,
      40: null,
      50: null,
      60: null,
      70: null,
      80: null,
      87: null,
      90: null,
      92: null,
      94: null,
      95: null,
      96: null,
      98: null,
      99: null,
      100: null,
    },
    neutral: {
      0: null,
      4: null,
      5: null,
      6: null,
      10: null,
      12: null,
      17: null,
      20: null,
      22: null,
      24: null,
      25: null,
      30: null,
      35: null,
      40: null,
      50: null,
      60: null,
      70: null,
      80: null,
      87: null,
      90: null,
      92: null,
      94: null,
      95: null,
      96: null,
      98: null,
      99: null,
      100: null,
    },
    "neutral-variant": {
      0: null,
      4: null,
      5: null,
      6: null,
      10: null,
      12: null,
      17: null,
      20: null,
      22: null,
      24: null,
      25: null,
      30: null,
      35: null,
      40: null,
      50: null,
      60: null,
      70: null,
      80: null,
      87: null,
      90: null,
      92: null,
      94: null,
      95: null,
      96: null,
      98: null,
      99: null,
      100: null,
    },
    error: {
      0: null,
      4: null,
      5: null,
      6: null,
      10: null,
      12: null,
      17: null,
      20: null,
      22: null,
      24: null,
      25: null,
      30: null,
      35: null,
      40: null,
      50: null,
      60: null,
      70: null,
      80: null,
      87: null,
      90: null,
      92: null,
      94: null,
      95: null,
      96: null,
      98: null,
      99: null,
      100: null,
    },
  },
  font: {
    body: {
      fontFamily: null,
      fontStyle: null,
      fontWeight: null,
      fontSize: {
        mobile: {
          small: null,
          medium: null,
          large: null,
        },
        tablet: {
          small: null,
          medium: null,
          large: null,
        },
        desktop: {
          small: null,
          medium: null,
          large: null,
        },
      },
    },
    ui: {
      fontFamily: null,
      fontStyle: null,
      fontWeight: null,
      fontSize: {
        mobile: {
          small: null,
          medium: null,
          large: null,
        },
        tablet: {
          small: null,
          medium: null,
          large: null,
        },
        desktop: {
          small: null,
          medium: null,
          large: null,
        },
      },
    },
    heading: {
      fontFamily: null,
      fontStyle: null,
      fontWeight: null,
      fontSize: {
        h1: null,
        h2: null,
        h3: null,
        h4: null,
        h6: null,
      },
    },
    display: {
      fontFamily: null,
      fontStyle: null,
      fontWeight: null,
      fontSize: {
        small: null,
        medium: null,
        large: null,
        xl: null,
        xxl: null,
      },
    },
  },
  breakpoint: {
    "mobile-xs": null,
    mobile: null,
    tablet: null,
    desktop: null,
    "desktop-xl": null,
  },
  spacing: {
    none: null,
    xsmall: null,
    small: null,
    medium: null,
    large: null,
    xlarge: null,
    "1/2": null,
    "1/3": null,
    "1/4": null,
    "1/5": null,
  },
  gridRepeat: {
    2: null,
    3: null,
    4: null,
  },
  radius: {
    none: null,
    xsmall: null,
    small: null,
    medium: null,
    large: null,
    xlarge: null,
  },
});

createGlobalTheme(":root", vars, {
  color: {
    primary: {
      0: "#000000",
      4: "#140d00",
      5: "#171000",
      6: "#1a1200",
      10: "#241a00",
      12: "#291e00",
      17: "#362800",
      20: "#3e2e00",
      22: "#433300",
      24: "#483700",
      25: "#4b3900",
      30: "#594400",
      35: "#674f00",
      40: "#755b00",
      50: "#937300",
      60: "#b28c0e",
      70: "#cfa62e",
      80: "#ecc148",
      87: "#ffd566",
      90: "#ffdf91",
      92: "#ffe6ab",
      94: "#ffecc3",
      95: "#ffefcf",
      96: "#fff2db",
      98: "#fff8f1",
      99: "#fffbff",
      100: "#ffffff",
    },
    secondary: {
      0: "#000000",
      4: "#001113",
      5: "#001416",
      6: "#001719",
      10: "#002023",
      12: "#002427",
      17: "#002f33",
      20: "#00363b",
      22: "#003b40",
      24: "#004045",
      25: "#004248",
      30: "#004f55",
      35: "#005c63",
      40: "#006971",
      50: "#00848e",
      60: "#00a0ac",
      70: "#1fbdca",
      80: "#4dd9e6",
      87: "#66edfa",
      90: "#85f3ff",
      92: "#a3f6ff",
      94: "#bdf8ff",
      95: "#c9f9ff",
      96: "#d5fbff",
      98: "#eafdff",
      99: "#f4feff",
      100: "#ffffff",
    },
    tertiary: {
      0: "#000000",
      4: "#280000",
      5: "#2d0000",
      6: "#310000",
      10: "#410001",
      12: "#470302",
      17: "#560e08",
      20: "#5f150e",
      22: "#651912",
      24: "#6b1e16",
      25: "#6e2018",
      30: "#7d2b22",
      35: "#8d362c",
      40: "#9c4237",
      50: "#bb5a4d",
      60: "#db7264",
      70: "#fb8c7c",
      80: "#ffb4a9",
      87: "#ffcfc8",
      90: "#ffdad5",
      92: "#ffe2dd",
      94: "#ffe9e6",
      95: "#ffedea",
      96: "#fff0ee",
      98: "#fff8f7",
      99: "#fffbff",
      100: "#ffffff",
    },
    neutral: {
      0: "#000000",
      4: "#0c0f0d",
      5: "#0e1210",
      6: "#111412",
      10: "#191c1a",
      12: "#1d201e",
      17: "#272b28",
      20: "#2e312f",
      22: "#323633",
      24: "#373a37",
      25: "#393c3a",
      30: "#444845",
      35: "#505350",
      40: "#5c5f5c",
      50: "#757875",
      60: "#8f918e",
      70: "#a9aca8",
      80: "#c5c7c3",
      87: "#d8dbd7",
      90: "#e1e3df",
      92: "#e7e9e5",
      94: "#eceeeb",
      95: "#eff1ed",
      96: "#f2f4f0",
      98: "#f8faf6",
      99: "#fbfdf9",
      100: "#ffffff",
    },
    "neutral-variant": {
      0: "#000000",
      4: "#0d0f06",
      5: "#101208",
      6: "#12140b",
      10: "#1b1d12",
      12: "#1f2116",
      17: "#292b20",
      20: "#2f3126",
      22: "#34362a",
      24: "#383a2f",
      25: "#3b3c31",
      30: "#46483c",
      35: "#525347",
      40: "#5e5f52",
      50: "#77786a",
      60: "#919283",
      70: "#abac9d",
      80: "#c7c8b8",
      87: "#dbdbcb",
      90: "#e3e4d3",
      92: "#e9e9d9",
      94: "#efefde",
      95: "#f2f2e1",
      96: "#f4f5e4",
      98: "#fafae9",
      99: "#fdfdec",
      100: "#ffffff",
    },
    error: {
      0: "#000000",
      4: "#280001",
      5: "#2d0001",
      6: "#310001",
      10: "#410002",
      12: "#490002",
      17: "#5c0004",
      20: "#690005",
      22: "#710005",
      24: "#790006",
      25: "#7e0007",
      30: "#93000a",
      35: "#a80710",
      40: "#ba1a1a",
      50: "#de3730",
      60: "#ff5449",
      70: "#ff897d",
      80: "#ffb4ab",
      87: "#ffcfc9",
      90: "#ffdad6",
      92: "#ffe2de",
      94: "#ffe9e6",
      95: "#ffedea",
      96: "#fff0ee",
      98: "#fff8f7",
      99: "#fffbff",
      100: "#ffffff",
    },
  },
  font: {
    body: {
      fontFamily: "var(--roboto-flex)",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: {
        mobile: {
          small: pxToRem(12),
          medium: pxToRem(14),
          large: pxToRem(16),
        },
        tablet: {
          small: pxToRem(14),
          medium: pxToRem(16),
          large: pxToRem(18),
        },
        desktop: {
          small: pxToRem(16),
          medium: pxToRem(18),
          large: pxToRem(20),
        },
      },
    },
    ui: {
      fontFamily: "var(--montserrat)",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: {
        mobile: {
          small: pxToRem(14),
          medium: pxToRem(16),
          large: pxToRem(18),
        },
        tablet: {
          small: pxToRem(16),
          medium: pxToRem(18),
          large: pxToRem(20),
        },
        desktop: {
          small: pxToRem(18),
          medium: pxToRem(20),
          large: pxToRem(22),
        },
      },
    },
    heading: {
      fontFamily: "var(--montserrat)",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: {
        h1: pxToRem(32),
        h2: pxToRem(28),
        h3: pxToRem(24),
        h4: pxToRem(20),
        h6: pxToRem(16),
      },
    },
    display: {
      fontFamily: "var(--heptaSlab)",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: {
        small: pxToRem(20),
        medium: pxToRem(24),
        large: pxToRem(32),
        xl: pxToRem(48),
        xxl: pxToRem(64),
      },
    },
  },
  breakpoint: {
    "mobile-xs": pxToRem(0),
    mobile: pxToRem(360),
    tablet: pxToRem(768),
    desktop: pxToRem(1280),
    "desktop-xl": pxToRem(1600),
  },
  spacing: {
    none: pxToRem(0),
    xsmall: pxToRem(4),
    small: pxToRem(8),
    medium: pxToRem(16),
    large: pxToRem(24),
    xlarge: pxToRem(32),
    "1/2": "50%",
    "1/3": "calc(100% / 3)",
    "1/4": "25%",
    "1/5": "20%",
  },
  gridRepeat: {
    2: "repeat(2, 1fr)",
    3: "repeat(3, 1fr)",
    4: "repeat(4, 1fr)",
  },
  radius: {
    none: pxToRem(0),
    xsmall: pxToRem(4),
    small: pxToRem(8),
    medium: pxToRem(16),
    large: pxToRem(24),
    xlarge: pxToRem(32),
  },
});
