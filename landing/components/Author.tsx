import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { TAuthor } from "types";
import { Photo } from "ui/atoms/Photo";

const StyledStack = styled(Stack)(() => ({
  flex: 1,
  zIndex: 1,
  "& + &": {
    zIndex: 0,
  },
}));

export function Author(
  props: TAuthor & { isFirstSpeaker?: boolean; isSecondSpeaker?: boolean }
) {
  const { photo_url, name, description, isFirstSpeaker, isSecondSpeaker } =
    props;

  const areTwoSpeakers = isFirstSpeaker || isSecondSpeaker;

  return (
    <StyledStack sx={{ cursor: "pointer" }}>
      <Photo
        url={photo_url}
        isFirstSpeaker={isFirstSpeaker}
        isSecondSpeaker={isSecondSpeaker}
      />

      <Stack direction="row">
        {!areTwoSpeakers && <div style={{ flex: 1 }}></div>}

        <Stack flex={2}>
          <Typography variant="h5" letterSpacing=".5rem" fontSize="1.3rem">
            {name}
          </Typography>
          <Typography fontSize="0.8rem">{description}</Typography>
        </Stack>
      </Stack>
    </StyledStack>
  );
}
