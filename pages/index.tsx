import { Typography } from "@mui/material";
import abstract_stars from "assets/images/abstract_stars_3d_form,_collection,_cinema4d,_on_white_background___--sref_https___i_0014_Layer-13.png";
import bg from "assets/images/cloud-background-image.png";
import React from "react";
import { Section } from "ui/templates/Section";

export default function Index() {
  return (
    <>
      <Section sx={{ backgroundImage: `url(${bg.src})` }}>
        <img src={abstract_stars.src} width="100px" height="100px" />

        <Typography
          fontSize={80}
          color="text.primary"
          fontFamily="Hlebozavod-Medium, serif"
        >
          рефорум space Будва
        </Typography>
      </Section>

      <Section sx={{ backgroundImage: `url(${bg.src})` }}>Section</Section>
    </>
  );
}
