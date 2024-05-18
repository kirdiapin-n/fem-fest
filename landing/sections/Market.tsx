import { Typography } from "@mui/material";
import React from "react";
import { Section } from "ui/templates/Section";
import { IDS } from "../../constants/landing";

export default function Market() {
  return (
    <Section id={IDS.MARKET} title={"Маркет"}>
      <Typography
        fontSize="2rem"
        color="text.primary"
        fontFamily="Hlebozavod-Medium, serif"
      >
        Маркет
      </Typography>
    </Section>
  );
}
