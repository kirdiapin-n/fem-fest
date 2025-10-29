import { IDS } from "constants/landing";
import { Grid, Stack, Typography } from "@mui/material";
import lectures from "api/2025/fem-sabat/lectures.json";
import { Author } from "landing/components/Author";
import React from "react";
import { Section } from "ui/templates/Section";

export default function Lecturers() {
  return (
    <Section id={IDS.LECTURERS} title="Лекторы">
      <Grid container spacing={6}>
        {lectures.map((lecturer, index) => (
          <Grid key={index} item xs={6} md={3}>
            <Stack key={index} spacing={2}>
              <Author {...lecturer.author} bg_variant="black" />

              <Typography lineHeight="1.5rem">
                {lecturer.topic.description}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
