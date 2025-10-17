import { getTheme } from "features/theme/utils/getTheme";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { ThemeProvider as MuiThemeProvider } from "ui/atoms";

const primaryByRoute: Record<string, `#${string}`> = {
  "/": "#CB1020",
  "/2024/fem-fest": "#CCFF5E",
};
export const ThemeProviderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname() ?? "/";

  const theme = useMemo(
    () => getTheme({ primaryColor: primaryByRoute[pathname] }),
    [pathname]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
