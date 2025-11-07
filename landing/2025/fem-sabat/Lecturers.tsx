import { IDS } from "constants/landing";
import { Grid, Stack, Typography } from "@mui/material";
import lectures from "api/2025/fem-sabat/lectures.json";
import { Author } from "landing/components/Author";
import React from "react";
import { Section } from "ui/templates/Section";
import abstraction from "../../../assets/abstractions/horns_and_eyes.webp";

export default function Lecturers() {
  return (
    <Section
      id={IDS.LECTURERS}
      title="Лекторки"
      sx={{
        background: "black",
        backgroundImage: `url(${abstraction.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 100%",
        backgroundSize: "contain",
      }}
      color="white"
    >
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
