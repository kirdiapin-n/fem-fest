import { useGate, useStore } from "effector-react";
import { Gate } from "features/theme/model";
import { $appTheme } from "features/theme/model/stores";
import React from "react";
import { ThemeProvider as MuiThemeProvider } from "ui/atoms";

export const ThemeProviderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useGate(Gate);
  const theme = useStore($appTheme);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
