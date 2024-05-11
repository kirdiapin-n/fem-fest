import { Typography } from "@mui/material";
import React from "react";
import { Section } from "ui/templates/Section";
import { IDS } from "../../constants/landing";

export default function About() {
  return (
    <Section id={IDS.ABOUT}>
      <Typography variant="h1" fontSize="5rem">
        О нас
      </Typography>

      <Typography fontSize="2rem" lineHeight="4rem">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus.
      </Typography>
    </Section>
  );
}
