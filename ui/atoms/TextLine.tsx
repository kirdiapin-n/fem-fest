import { Typography } from "@mui/material";
import React from "react";

interface TextLineProps {
  children: React.ReactNode;
  rotation?: number;
}

export const TextLine = ({ children, rotation, ...props }: TextLineProps) => (
  <Typography
    sx={{
      display: { xs: "none", lg: "block" },
      right: { lg: "-40%", xl: "-2%" },
      top: { lg: "32%", xl: "20%" },
    }}
    fontSize={30}
    color="black"
    bgcolor="text.primary"
    fontFamily="Hlebozavod-Medium, serif"
    noWrap
    style={{
      position: "absolute",
      transform: `rotate(${rotation}deg)`,
    }}
    {...props}
  >
    {children}
  </Typography>
);
