import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      dark: "hsla(202, 100%, 30%, 1)",
      main: "hsla(202, 100%, 38%, 1)",
      light: "hsla(202, 100%, 90%, 1)",
    },
  },
  typography: {
    fontFamily: [
      "Noto Sans Thai",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 16,
    h1: {
      fontSize: 34,
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h2: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.42,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.42,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.42,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.42,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.42,
    },
    button: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.42,
    },
    caption: {
      fontSize: 12,
      lineHeight: 1.42,
    },
  },
});

export default theme;
