import { Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/textline.module.css";

interface TextLineProps {
  children: React.ReactNode;
  rotation?: number;
}

export const TextLine = ({ children, rotation, ...props }: TextLineProps) => (
  <div
    className={styles.textlineContainer}
    style={{
      position: "absolute",
      transform: `rotate(${rotation}deg)`,
    }}
    {...props}
  >
    <Typography
      component="div"
      className={styles.textline}
      fontSize={30}
      color="black"
      fontFamily="Hlebozavod-Medium, serif"
      noWrap
    >
      {children}
      {children}
    </Typography>
  </div>
);
