import { Typography } from "@mui/material";
import React from "react";
import { Section } from "ui/templates/Section";
import { IDS } from "../../constants/landing";

export default function Lectures() {
  return (
    <Section id={IDS.LECTURES}>
      <Typography
        fontSize={80}
        color="text.primary"
        fontFamily="Hlebozavod-Medium, serif"
      >
        Лекции
      </Typography>
    </Section>
  );
}
