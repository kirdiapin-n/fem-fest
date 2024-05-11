import { Typography } from "@mui/material";
import React from "react";
import { Section } from "ui/templates/Section";
import { IDS } from "../../constants/landing";

export default function Lecturers() {
  return (
    <Section id={IDS.LECTURERS}>
      <Typography
        fontSize={80}
        color="text.primary"
        fontFamily="Hlebozavod-Medium, serif"
      >
        Лекторы
      </Typography>
    </Section>
  );
}
