import { ACCENT_FONT } from "constants/fonts";
import { IDS } from "constants/landing";
import { Chip, Link, Stack, Typography } from "@mui/material";
import data from "api/data.json";
import bg from "assets/images/cloud-background-image.png";
import React from "react";
import { Lectures } from "types";
import { Section } from "ui/templates/Section";
import { getLectures } from "utils/data";

type Props = {
  tags: string[];
  items: Lectures;
};
function LecturesList({ tags, items }: Props) {
  return (
    <Stack spacing={6} flex={1}>
      <Stack direction="row" spacing={2}>
        {tags.map((tag) => (
          <Chip
            label={
              <Typography fontSize="2.5rem" variant="h5" letterSpacing="0.3rem">
                {tag}
              </Typography>
            }
            variant="outlined"
            color="primary"
            sx={{
              height: "unset",
            }}
          />
        ))}
      </Stack>

      <Stack spacing={4}>
        {items.map(({ topic, author, id }) => (
          <Stack key={id} direction="row" spacing={2}>
            <Typography
              fontFamily={ACCENT_FONT}
              letterSpacing="0.2rem"
              fontSize="40px"
              lineHeight="2.5rem"
            >
              {topic.time}
            </Typography>
            <Typography fontSize="2rem" lineHeight="2rem">
              <Link color="inherit" underline="none" href={`#${id}`}>
                <b>{author.name}</b>
              </Link>
              . {topic.description}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default function Lectures() {
  const preparedData = Object.entries(data).map(([id, value]) => ({
    id,
    ...value,
  }));

  const firstDayLectures = getLectures(preparedData, "first_day");

  const secondDayLectures = getLectures(preparedData, "second_day");

  return (
    <Section
      id={IDS.LECTURES}
      sx={{ backgroundImage: `url(${bg.src})` }}
      color="white"
    >
      <Stack gap={4} direction="row" flexWrap="wrap">
        <LecturesList tags={["1 июня", "лекции"]} items={firstDayLectures} />
        <LecturesList tags={["2 июня", "лекции"]} items={secondDayLectures} />
      </Stack>
    </Section>
  );
}