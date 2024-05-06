import {
  createTheme,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";

// A custom theme for this app
createTheme({
  palette: {
    primary: {
      main: "#62A527",
    },
    secondary: {
      main: "#C5D3D8",
    },
    success: {
      main: "#62A527",
    },
    error: {
      main: "#F16A73",
    },
    info: {
      main: "#6DC0D5",
    },
    warning: {
      main: "#F1BD6A",
    },
  },
  typography: {
    fontSize: 16,
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    // button: {
    //   fontStyle: 'italic',
    // },
  },
  /*
  Spacing values from the Figma design:
    - 0.125rem (2px): space-xxs
    - 0.25rem (4px): space-xs
    - 0.5rem (8px): space-s
    - 1rem (16px): space-m -> default
    - 2rem (32px): space-l
    - 4rem (64px): space-xl
  */
  spacing: 16,
});

import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#62a527",
    },
    secondary: {
      main: "#c5d3d8",
    },
    success: {
      main: "#62a527",
    },
    info: {
      main: "#6dc0d5",
    },
    warning: {
      main: "#f1bd6a",
    },
    error: {
      main: "#f16a73",
    },
    cropsterSecondary: {
      main: "#404D51",
    },
  },
  typography: {
    fontSize: 16,
    h1: {
      letterSpacing: "0.03em",
      lineHeight: 1.24,
      fontWeight: 300,
      fontSize: "7rem",
    },
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontFamily: "'Roboto', helvetica, arial, sans-serif",
    button: {
      fontSize: "0.875rem",
      textTransform: "none",
    },
  },
  spacing: 8,
});
