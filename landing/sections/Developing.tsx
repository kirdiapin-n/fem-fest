import { Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import developers from "api/developers.json";
import { Icons } from "icons";
import React from "react";
import { Section } from "../../ui/templates/Section";

export default function Developing() {
  return (
    <Section title="Разработка сайта">
      <Grid container spacing={6}>
        {developers.map(({ name, contacts, role }, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Stack spacing={1}>
              <Typography fontSize="1.3rem">{name}</Typography>

              <Typography fontSize="0.8rem">{role}</Typography>

              <Stack direction="row">
                <IconButton component="a" href={contacts.telegram}>
                  <Icons.Telegram />
                </IconButton>

                {contacts.email && (
                  <IconButton component="a" href={contacts.email}>
                    <Icons.Mail />
                  </IconButton>
                )}
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
