import { Typography } from "@mui/material";
import React from "react";
import { Section } from "ui/templates/Section";
import { IDS } from "../../constants/landing";

export default function Exhibition() {
  return (
    <Section id={IDS.EXHIBITION}>
      <Typography
        fontSize="2rem"
        color="text.primary"
        fontFamily="Hlebozavod-Medium, serif"
      >
        Выставка
      </Typography>
    </Section>
  );
}
