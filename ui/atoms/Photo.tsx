import { Box } from "@mui/material";
import { styled } from "@mui/system";
import black_fl from "assets/images/black_realistic_fluffy.webp";
import pink_fl from "assets/images/pink_realistic_fluffy.webp";
import { Icons } from "icons";
import React, { memo } from "react";
import styles from "styles/about.module.css";
import { getRandomImageFor2024FemFest } from "utils/images";

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

const RandomImage = memo(() => {
  return (
    <img
      className={styles.abstractRightAngle}
      alt="abstraction"
      src={getRandomImageFor2024FemFest()}
    />
  );
});

export function Photo({
  url,
  isFirstSpeaker,
  isSecondSpeaker,
  withoutFilters,
  bg_variant = "pink",
}: {
  url?: string;
  isFirstSpeaker?: boolean;
  isSecondSpeaker?: boolean;
  withoutFilters?: boolean;
  bg_variant?: "pink" | "black";
}) {
  const areTwoSpeakers = isFirstSpeaker || isSecondSpeaker;
  const showBottomPic = areTwoSpeakers
    ? isFirstSpeaker && !isSecondSpeaker
    : true;

  const showTopPic = areTwoSpeakers ? !isFirstSpeaker && isSecondSpeaker : true;

  const bgMap = {
    pink: pink_fl.src,
    black: black_fl.src,
  };

  return (
    <Box
      position="relative"
      paddingTop={PHOTO_RATIO_PERCENTS}
      sx={{
        transform: areTwoSpeakers
          ? `translateX(${isFirstSpeaker ? "" : "-"}40px)`
          : "unset",
        aspectRatio: areTwoSpeakers ? "1/1" : "unset",
        maxHeight: "275px",
      }}
    >
      <img
        style={{ position: "absolute", top: 0, left: 0 }}
        src={bgMap[bg_variant]}
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
        {url ? (
          <StyledBox
            width="100%"
            height="100%"
            bgcolor="gray"
            overflow="hidden"
            borderRadius={areTwoSpeakers ? "100%" : "200px"}
            sx={{
              backgroundImage: `url(${url})`,
              ...(withoutFilters && {
                "&:before": {
                  filter: "unset",
                },
              }),
            }}
          />
        ) : (
          <Icons.ImageNotSupported sx={{ width: "100%", height: "100%" }} />
        )}
      </Box>

      {showTopPic && (
        <Box
          position="absolute"
          height={ABSTRACTION_SIZE_PERCENT}
          width={ABSTRACTION_SIZE_PERCENT}
          sx={{
            right: "-5%",
            top: isSecondSpeaker ? "unset" : "-5%",
            bottom: isSecondSpeaker ? "-5%" : "unset",
            zIndex: "1",
          }}
        >
          <RandomImage />
        </Box>
      )}

      {showBottomPic && (
        <Box
          position={"absolute"}
          height={ABSTRACTION_SIZE_PERCENT}
          width={ABSTRACTION_SIZE_PERCENT}
          sx={{
            left: "0",
            bottom: isFirstSpeaker ? "unset" : "-5%",
            top: isFirstSpeaker ? "-5%" : "unset",
          }}
        >
          <RandomImage />
        </Box>
      )}
    </Box>
  );
}
