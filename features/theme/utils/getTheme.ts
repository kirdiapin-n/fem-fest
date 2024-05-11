import { ACCENT_FONT, BLOCK_FONT } from "constants/fonts";
import { Theme, ThemeOptions } from "types";
import { createTheme, deepOrange, deepPurple, grey } from "utils/styles";

const titles = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
const primaryColor = "#CCFF5E";

const defaultTheme: ThemeOptions = {
  components: {
    MuiBadge: {
      styleOverrides: {
        badge: { fontSize: 9, height: 15, minWidth: 15 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderWidth: "4px",
          borderRadius: "100px",
          paddingRight: "1rem",
          paddingLeft: "1rem",
        },
        colorPrimary: {
          borderColor: primaryColor,
          color: primaryColor,
        },
      },
    },
  },
  typography: {
    fontFamily: BLOCK_FONT,
    ...titles.reduce((prev, curr) => {
      return {
        ...prev,
        [curr]: {
          letterSpacing: "1.5rem",
          fontFamily: ACCENT_FONT,
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
      primary: primaryColor,
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
      primary: primaryColor,
      secondary: grey[700],
    },
  },
});

export const getTheme = (value: "dark" | "light") =>
  ({
    ...defaultTheme,
    ...(value === "dark" ? darkTheme : lightTheme),
  } as Theme);
