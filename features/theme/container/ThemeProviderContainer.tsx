import { getTheme } from "features/theme/utils/getTheme";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { ThemeProvider as MuiThemeProvider } from "ui/atoms";

const defaultColor = "#CB1020";

const primaryByRoute: Record<string, `#${string}`> = {
  "/": defaultColor,
  "/2024/fem-fest": "#CCFF5E",
};

const backgroundColorByRoute: Record<string, `#${string}`> = {
  "/": "#A5A5A5",
  "/2024/fem-fest": "#FFFFFF",
};

export const ThemeProviderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname() ?? "/";

  const theme = useMemo(
    () =>
      getTheme({
        primaryColor: primaryByRoute[pathname] || defaultColor,
        backgroundColor: backgroundColorByRoute[pathname] || defaultColor,
      }),
    [pathname]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
