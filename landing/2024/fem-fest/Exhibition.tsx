import { IDS } from "constants/landing";
import { Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import artists from "api/2024/fem-fest/artists.json";
import React from "react";
import { Photo } from "ui/atoms/Photo";
import { Section } from "ui/templates/Section";

export default function Exhibition() {
  return (
    <Section id={IDS.EXHIBITION} title="Выставка художниц">
      <Grid container spacing={4}>
        {artists.map(({ author }, index) => (
          <Grid key={index} item xs={6} sm={4} md={2}>
            <Stack direction="column">
              <Photo url={author.photo_url} />

              <Typography pt={2} fontSize="1.3rem">
                {author.name}
              </Typography>

              <Typography fontSize="0.8rem">{author.description}</Typography>

              {/*<Typography>{author.topic}</Typography>*/}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
