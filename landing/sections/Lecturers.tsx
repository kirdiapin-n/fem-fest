import { IDS } from "constants/landing";
import { Grid, Stack, Typography } from "@mui/material";
import data from "api/data.json";
import { Icons } from "icons";
import React from "react";
import { TLector } from "types";
import { Button } from "ui/atoms/Button";
import { Photo } from "ui/atoms/Photo";
import { Section } from "ui/templates/Section";

function Lecturer(props: TLector & { id: string }) {
  const { id, author, topic } = props;

  return (
    <Stack id={id}>
      <Photo url={author.photo_url} />

      <Stack spacing={4}>
        <Stack direction="row">
          <div style={{ flex: 1 }}></div>
          <Stack flex={1}>
            <Typography variant="h5" letterSpacing=".5rem" fontSize="1.75rem">
              {author.name}
            </Typography>
            <Typography fontSize="1.2rem">{author.description}</Typography>
          </Stack>
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
    </Stack>
  );
}

export default function Lecturers() {
  const lecturers = Object.entries(data).map(([id, value]) => ({
    id,
    ...value,
  }));

  return (
    <Section id={IDS.LECTURERS} title={"Лекторы"}>
      <Grid container spacing={6}>
        {lecturers.map((lecturer, index) => (
          <Grid key={index} item xs={6} md={3}>
            <Lecturer {...lecturer} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
