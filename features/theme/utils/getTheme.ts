import { ThemeOptions, Theme } from "types";
import { createTheme, deepOrange, deepPurple, grey } from "utils/styles";

const titles = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

const defaultTheme: ThemeOptions = {
  components: {
    MuiBadge: {
      styleOverrides: {
        badge: { fontSize: 9, height: 15, minWidth: 15 },
      },
    },
  },
  typography: {
    fontFamily: "IBM plex, serif",
    ...titles.reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: {
          letterSpacing: "0.6em",
          fontFamily: "Hlebozavod-Medium, serif",
        },
      };
    }, {}),
  },
};

const darkTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: "dark",
    primary: deepOrange,
    secondary: grey,
    divider: deepOrange[700],
    background: {
      default: "#000000",
    },
    text: {
      primary: "#CCFF5E",
      secondary: grey[500],
    },
  },
});

export const lightTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: "light",
    primary: deepPurple,
    secondary: grey,
    divider: deepPurple[300],
    text: {
      primary: "#CCFF5E",
      secondary: grey[700],
    },
  },
});

export const getTheme = (value: "dark" | "light") =>
  ({
    ...defaultTheme,
    ...(value === "dark" ? darkTheme : lightTheme),
  } as Theme);
