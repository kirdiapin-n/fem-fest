import { ACCENT_FONT } from "constants/fonts";
import { IDS } from "constants/landing";
import { Chip, Link, Stack, Typography } from "@mui/material";
import data from "api/data.json";
import bg from "assets/images/cloud-background-image.webp";
import React from "react";
import { Lectures } from "types";
import { Section } from "ui/templates/Section";
import { getLectures } from "utils/data";

type Props = {
  tags: string[];
  items: Lectures;
};
function List({ tags, items }: Props) {
  return (
    <Stack spacing={6} flex={1}>
      <Stack direction="row" spacing={2}>
        {tags.map((tag, index) => (
          <Chip
            key={index}
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
              fontSize="2.125rem"
              lineHeight="2.5rem"
            >
              {topic.time}
            </Typography>
            <Typography fontSize="1.7rem" lineHeight="2.3rem">
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

export default function Scheduler() {
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
      <Stack gap={5.2} direction="row" flexWrap="wrap">
        <List tags={["1 июня"]} items={firstDayLectures} />
        <List tags={["2 июня"]} items={secondDayLectures} />
      </Stack>
    </Section>
  );
}
