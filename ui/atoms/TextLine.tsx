import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "styles/textline.module.css";

interface TextLineProps {
  left?: boolean;
  rotation?: number;
  text: string;
}

export const TextLine = ({ text, rotation, left, ...props }: TextLineProps) => (
  <Box
    bgcolor="text.primary"
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
      {text.repeat(20)}
    </Typography>
  </Box>
);
