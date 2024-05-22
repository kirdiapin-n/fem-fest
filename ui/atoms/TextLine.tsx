import { Typography } from "@mui/material";
import React from "react";
import styles from "styles/textline.module.css";

interface TextLineProps {
  children: React.ReactNode;
  left?: boolean;
  rotation?: number;
}

export const TextLine = ({
  children,
  rotation,
  left,
  ...props
}: TextLineProps) => (
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
      className={`${styles.textline} ${
        left ? styles.leftAnimation : styles.rightAnimation
      }`}
      fontSize="2rem"
      color="black"
      fontFamily="Hlebozavod-Medium, serif"
      noWrap
    >
      {children}
      {children}
    </Typography>
  </div>
);
