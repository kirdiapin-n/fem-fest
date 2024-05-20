import { ACCENT_FONT, BLOCK_FONT } from "constants/fonts";
import { Theme, ThemeOptions } from "types";
import { createTheme, deepPurple, grey } from "utils/styles";

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
    allVariants: {
      zIndex: 1,
    },
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

export const lightTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: "light",
    primary: {
      light: primaryColor,
      dark: primaryColor,
      main: primaryColor,
    },
    secondary: grey,
    divider: deepPurple[300],
    text: {
      primary: primaryColor,
      secondary: grey[700],
    },
  },
});

export const getTheme = () =>
  ({
    ...defaultTheme,
    ...lightTheme,
  } as Theme);
