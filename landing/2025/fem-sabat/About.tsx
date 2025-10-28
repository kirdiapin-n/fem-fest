import { IDS } from "constants/landing";
import { Box, Grid, Typography } from "@mui/material";
import founders from "api/2025/fem-sabat/founders.json";
import letter from "assets/images/f-letter.webp";
import womanRights from "assets/images/womans-rights.webp";
import React from "react";
import styles from "styles/about.module.css";
import { Photo } from "ui/atoms/Photo";
import { Stack } from "ui/atoms/Stack";
import { WhoWeAre } from "ui/atoms/WhoWeAre";
import { Section } from "ui/templates/Section";
import { getRandomImageFor2025FemSabat } from "utils/images";

export default function About() {
  return (
    <Section id={IDS.ABOUT} title={"о нас"}>
      <Stack sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <WhoWeAre />

        <Box
          style={{
            marginLeft: "80px",
            marginRight: "80px",
          }}
          position="relative"
          width="40rem"
          sx={{
            justifyContent: "center",
            display: { xs: "none", lg: "flex" },
          }}
        >
          <img
            alt="fem fest"
            className={styles.mainImage}
            src={womanRights.src}
          />
          <Box
            sx={{ left: "0", bottom: "-100px", zIndex: "2" }}
            width={"12rem"}
            height={"12rem"}
            position={"absolute"}
          >
            <img
              className={styles.abstractLeftAngle}
              alt="abstraction"
              src={getRandomImageFor2025FemSabat()}
            />
          </Box>
          <Box
            sx={{ right: "-120px", top: "-200px", zIndex: "0" }}
            width={"20rem"}
            height={"20rem"}
            position={"absolute"}
          >
            <img className={styles.letter} alt="abstraction" src={letter.src} />
          </Box>
          <Box
            sx={{ right: "-60px", bottom: "-250px" }}
            width={"8rem"}
            height={"8rem"}
            position={"absolute"}
          >
            <img
              className={styles.abstractRightAngle}
              alt="abstraction"
              src={getRandomImageFor2025FemSabat()}
            />
          </Box>
        </Box>
      </Stack>

      <Grid pt={2} container spacing={4}>
        {founders.map((data, index) => (
          <Grid key={index} item xs={6} sm={6} md={3}>
            <Stack direction="column">
              <Photo bg_variant="black" withoutFilters url={data.photo_url} />

              <Typography fontWeight="bolder" fontSize="1.4rem">
                {data.name}
              </Typography>

              <Typography whiteSpace="pre-wrap">{data.description}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
