import { ACCENT_FONT } from "constants/fonts";
import { FAR_TELEGRAM_URL, IDS } from "constants/landing";
import {
  Button,
  Chip,
  Link,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import data from "api/data.json";
import bg from "assets/images/cloud-background-image.webp";
import { Icons } from "icons";
import React, { useState } from "react";
import { LectureType } from "types";
import { Section } from "ui/templates/Section";
import { isFirstDay } from "utils/date";
import { getLectures } from "utils/landing";
import { concatStrings } from "utils/typography";

type Props = {
  tags: string[];
  items: LectureType[];
};

function Item({
  id,
  author,
  second_author,
  is_not_speaker,
  topic,
}: LectureType) {
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
        fontSize="1.5rem"
        lineHeight="2.5rem"
      >
        {topic.time}
      </Typography>
      <Typography fontSize="1.3rem" lineHeight="2.3rem">
        {concatStrings(". ", authorNameElement, topic.description)}
      </Typography>
    </Stack>
  );
}

function List({ tags, items }: Props) {
  if (!items.length) return null;

  return (
    <Stack spacing={4} flex={1}>
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

      <Stack spacing={2}>
        {items.map((props) => (
          <Item key={props.id} {...props} />
        ))}
      </Stack>
    </Stack>
  );
}

export default function Scheduler() {
  const [value, setValue] = useState(isFirstDay());

  return (
    <Section
      id={IDS.SCHEDULER}
      title="Расписание"
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bg.src})`,
      }}
      color="white"
    >
      <Stack spacing={4} direction="column">
        <Tabs
          value={value}
          onChange={(_, val) => setValue(val)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            sx={{ color: "text.primary", fontSize: "2rem" }}
            label="1 Июня"
            value="first"
          />
          <Tab
            sx={{ color: "text.primary", fontSize: "2rem" }}
            label="2 июня"
            value="second"
          />
        </Tabs>

        {value === "first" && (
          <Stack direction="row" gap={4} flexWrap="wrap">
            <List
              tags={["большой зал"]}
              items={getLectures(data, value, "big")}
            />

            <List
              tags={["малый зал"]}
              items={getLectures(data, value, "small")}
            />
          </Stack>
        )}

        {value === "second" && (
          <Stack direction="row" spacing={4} flexWrap="wrap">
            <List
              tags={["большой зал"]}
              items={getLectures(data, value, "big")}
            />

            <List
              tags={["Малый зал"]}
              items={getLectures(data, value, "small")}
            />
          </Stack>
        )}
        <Stack alignItems="center" width="100%">
          <Button
            component="a"
            target="_blank"
            endIcon={<Icons.Telegram />}
            variant="contained"
            href={FAR_TELEGRAM_URL}
            size="large"
          >
            Подробнее о спикерах и их лецкиях в
          </Button>
        </Stack>
      </Stack>
    </Section>
  );
}
