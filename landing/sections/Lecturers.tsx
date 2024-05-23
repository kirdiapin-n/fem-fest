import { IDS } from "constants/landing";
import { Grid, Stack, Typography } from "@mui/material";
import data from "api/data.json";
import { Author } from "landing/components/Author";
import React from "react";
import { LectureType } from "types";
import { Section } from "ui/templates/Section";

function Lecturer(props: LectureType) {
  const { id, author, topic, second_author } = props;

  return (
    <Stack id={String(id)} spacing={2}>
      <Stack direction="row">
        <Author {...author} isFirstSpeaker={!!second_author} />

        {second_author && <Author {...second_author} isSecondSpeaker />}
      </Stack>

      <Typography lineHeight="1.5rem">{topic.description}</Typography>
    </Stack>
  );
}

export default function Lecturers() {
  return (
    <Section id={IDS.LECTURERS} title="Лекторы">
      <Grid container spacing={6}>
        {data
          .filter(({ is_not_speaker, hidden }) => !is_not_speaker || hidden)
          .map((lecturer, index) => (
            <Grid
              key={index}
              item
              xs={lecturer.second_author ? 12 : 6}
              md={lecturer.second_author ? 6 : 3}
            >
              <Lecturer {...lecturer} id={index} />
            </Grid>
          ))}
      </Grid>
    </Section>
  );
}
