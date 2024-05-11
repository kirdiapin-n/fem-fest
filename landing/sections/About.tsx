import { Typography } from "@mui/material";
import React from "react";
import { Section } from "ui/templates/Section";
import { IDS } from "../../constants/landing";

export default function About() {
  return (
    <Section id={IDS.ABOUT}>
      <Typography
        fontSize={80}
        color="text.primary"
        fontFamily="Hlebozavod-Medium, serif"
      >
        О нас
      </Typography>
    </Section>
  );
}
