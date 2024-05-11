import { IDS } from "constants/landing";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import data from "api/data.json";
import pink_fl from "assets/images/pink_realistic_fluffy.png";
import { PHOTOS } from "assets/photos";
import React from "react";
import { TLector } from "types";
import { Section } from "ui/templates/Section";

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
    filter: "grayscale(100%) contrast(1.3)",
  },
});

function Lecturer(props: TLector & { id: string }) {
  const { id, author, topics } = props;

  return (
    <Stack p={4} flex={1} id={id}>
      <Box width="500px" position="relative" height="420px">
        <img
          style={{ position: "absolute", left: "-70px", top: "-20px" }}
          src={pink_fl.src}
          width="100%"
          height="100%"
          alt="pink_fl"
        />
        <StyledBox
          position="absolute"
          top="0"
          left="0"
          width="470px"
          bgcolor="gray"
          height="390px"
          borderRadius="200px"
          overflow="hidden"
          sx={{ backgroundImage: `url(${PHOTOS[author.image_id].src})` }}
        ></StyledBox>
      </Box>

      <Stack spacing={4}>
        <Stack direction="row">
          <div style={{ flex: 1 }}></div>
          <Stack flex={1}>
            <Typography variant="h5" fontSize="40px">
              {author.name}
            </Typography>
            <Typography fontSize="24px">{author.description}</Typography>
          </Stack>
        </Stack>

        {topics.first_day && (
          <Typography lineHeight="1em" fontSize="40px">
            {topics.first_day.description}
          </Typography>
        )}
        {topics.second_day && (
          <Typography lineHeight="1em" fontSize="40px">
            {topics.second_day.description}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}

export default function Lecturers() {
  const lecturers = Object.entries(data).map(([id, value]) => ({
    id,
    ...value,
  }));

  return (
    <Section id={IDS.LECTURERS}>
      <Stack direction="row" flexWrap="wrap">
        {lecturers.map((lecturer, index) => (
          <Lecturer key={index} {...lecturer} />
        ))}
      </Stack>
    </Section>
  );
}
