import { Typography } from "@mui/material";
import React from "react";
import { Section } from "ui/templates/Section";

export default function Lecturers() {
  return (
    <Section>
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
