import { ACCENT_FONT, BLOCK_FONT } from "constants/fonts";
import { Theme, ThemeOptions } from "types";
import { createTheme, deepPurple, grey } from "utils/styles";

const titles = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

type TOptions = {
  primaryColor: `#${string}`;
  backgroundColor: `#${string}`;
};

const defaultTheme = (opt: TOptions): ThemeOptions =>
  createTheme({
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
          },
          colorPrimary: {
            borderColor: opt.primaryColor,
            color: opt.primaryColor,
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            indicator: opt.primaryColor,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: opt.primaryColor,
            fontSize: "2rem",
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
    palette: {
      primary: {
        main: opt.primaryColor,
      },
      background: {
        paper: opt.backgroundColor,
      },
      secondary: grey,
      divider: deepPurple[300],
      text: {
        primary: opt.primaryColor,
        secondary: grey[700],
      },
    },
  });

export const getTheme = (opt: TOptions) =>
  ({
    ...defaultTheme(opt),
  } as Theme);
