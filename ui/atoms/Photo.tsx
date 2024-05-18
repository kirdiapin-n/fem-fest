import { Box } from "@mui/material";
import { styled } from "@mui/system";
import pink_fl from "assets/images/pink_realistic_fluffy.webp";
import React from "react";
import styles from "styles/about.module.css";
import { getRandomImage } from "utils/images";

const StyledBox = styled(Box)({
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  "&:before": {
    content: "''",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "inherit",
    filter: "grayscale(100%) contrast(1.1)",
  },
});

const PHOTO_RATIO = 86.25;
const MAX_PERCENTS = 100;
const PHOTO_RATIO_PERCENTS = `${PHOTO_RATIO}%`;
const PHOTO_TOP_POSITION_PERCENTS = `${(MAX_PERCENTS - PHOTO_RATIO) / 2}%`;
const PHOTO_LEFT_POSITION = `${MAX_PERCENTS - PHOTO_RATIO}%`;
const ABSTRACTION_SIZE_PERCENT = "25%";

export function Photo({ url }: { url: string }) {
  return (
    <Box position="relative" paddingTop={PHOTO_RATIO_PERCENTS}>
      <img
        style={{ position: "absolute", top: 0, left: 0 }}
        src={pink_fl.src}
        width="100%"
        height="100%"
        alt="pink_fl"
      />
      <Box
        position="absolute"
        height={PHOTO_RATIO_PERCENTS}
        width={PHOTO_RATIO_PERCENTS}
        top={PHOTO_TOP_POSITION_PERCENTS}
        left={PHOTO_LEFT_POSITION}
      >
        <StyledBox
          width="100%"
          height="100%"
          bgcolor="gray"
          overflow="hidden"
          borderRadius="200px"
          sx={{ backgroundImage: `url(${url})` }}
        />
      </Box>
      <Box
        position="absolute"
        height={ABSTRACTION_SIZE_PERCENT}
        width={ABSTRACTION_SIZE_PERCENT}
        sx={{ right: "-5%", top: "-5%", zIndex: "1" }}
      >
        <img
          className={styles.abstractRightAngle}
          alt="abstraction"
          src={getRandomImage()}
        />
      </Box>
      <Box
        position={"absolute"}
        height={ABSTRACTION_SIZE_PERCENT}
        width={ABSTRACTION_SIZE_PERCENT}
        sx={{ left: "0", bottom: "-5%" }}
      >
        <img
          className={styles.abstractRightAngle}
          alt="abstraction"
          src={getRandomImage()}
        />
      </Box>
    </Box>
  );
}