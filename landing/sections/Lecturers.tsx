import { IDS } from "constants/landing";
import { Grid, Stack, Typography } from "@mui/material";
import data from "api/data.json";
import { Icons } from "icons";
import React from "react";
import { TLector, TLectures } from "types";
import { Button } from "ui/atoms/Button";
import { Section } from "ui/templates/Section";
import { Author } from "../components/Author";

function Lecturer(props: TLector & { id: string }) {
  const { id, author, topic, second_author } = props;

  return (
    <Stack id={id} spacing={4}>
      <Stack direction="row">
        <Author {...author} isFirstSpeaker={!!second_author} />

        {second_author && <Author {...second_author} isSecondSpeaker />}
      </Stack>

      <Typography lineHeight="2rem" fontSize="1.5rem">
        {topic.description}
      </Typography>

      {author.telegram && (
        <Button
          variant="outlined"
          href={author.telegram}
          endIcon={<Icons.Telegram />}
        >
          подробнее в
        </Button>
      )}
    </Stack>
  );
}

export default function Lecturers() {
  const lecturers = Object.entries(data).map(([id, value]) => ({
    id,
    ...value,
  })) as TLectures;

  return (
    <Section id={IDS.LECTURERS} title={"Лекторы"}>
      <Grid container spacing={6}>
        {lecturers
          .filter(({ is_not_speaker }) => !is_not_speaker)
          .map((lecturer, index) => (
            <Grid
              key={index}
              item
              xs={lecturer.second_author ? 12 : 6}
              md={lecturer.second_author ? 6 : 3}
            >
              <Lecturer {...lecturer} />
            </Grid>
          ))}
      </Grid>
    </Section>
  );
}
