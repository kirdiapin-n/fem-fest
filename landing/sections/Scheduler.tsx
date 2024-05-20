import { ACCENT_FONT } from "constants/fonts";
import { IDS } from "constants/landing";
import { Chip, Link, Stack, Typography } from "@mui/material";
import data from "api/data.json";
import bg from "assets/images/cloud-background-image.webp";
import React from "react";
import { TLectures } from "types";
import { Section } from "ui/templates/Section";
import { getLectures } from "utils/landing";
import { concatStrings } from "utils/typography";

type Props = {
  tags: string[];
  items: TLectures;
};
function Item({
  id,
  author,
  second_author,
  is_not_speaker,
  topic,
}: TLectures[number]) {
  const authorName = concatStrings(" и ", author.name, second_author?.name);

  const authorNameElement = is_not_speaker ? (
    <b>{authorName}</b>
  ) : (
    <Link color="inherit" underline="none" href={`#${id}`}>
      <b>{authorName}</b>
    </Link>
  );

  return (
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
        {concatStrings(". ", authorNameElement, topic.description)}
      </Typography>
    </Stack>
  );
}

function List({ tags, items }: Props) {
  if (!items.length) return null;

  return (
    <Stack spacing={6} flex={1}>
      <Stack direction="row" gap={2} flexWrap="wrap">
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
        {items.map((props) => (
          <Item key={props.id} {...props} />
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

  return (
    <Section
      id={IDS.SCHEDULER}
      title="Расписание"
      sx={{ backgroundImage: `url(${bg.src})` }}
      color="white"
    >
      <Stack gap={5.2} direction="row" flexWrap="wrap">
        <List
          tags={["1 июня", "большой зал"]}
          items={getLectures(preparedData, "first", "big")}
        />

        <List
          tags={["1 июня", "малый зал"]}
          items={getLectures(preparedData, "first", "small")}
        />

        <List
          tags={["2 июня", "большой зал"]}
          items={getLectures(preparedData, "second", "big")}
        />

        <List
          tags={["2 июня", "Малый зал"]}
          items={getLectures(preparedData, "second", "small")}
        />
      </Stack>
    </Section>
  );
}
