import { Box, Typography } from "@mui/material";
import letter from "assets/images/f-letter.png";
import React from "react";
import { Section } from "ui/templates/Section";
import womanRights from "../../assets/images/womans-rights.png";
import { IDS } from "../../constants/landing";
import styles from "../../styles/about.module.css";
import { Stack } from "../../ui/atoms/Stack";
import { getRandomImage } from "../../utils/images";

export default function About() {
  return (
    <Section id={IDS.ABOUT}>
      <Stack spacing={4} direction={"column"}>
        <Typography variant="h1" fontSize="5rem">
          О нас
        </Typography>

        <Stack sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Typography
            fontSize="2rem"
            lineHeight="4rem"
            width={{ xs: "100%", lg: "50%" }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.
          </Typography>
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
                src={getRandomImage()}
              />
            </Box>
            <Box
              sx={{ right: "-120px", top: "-200px", zIndex: "0" }}
              width={"20rem"}
              height={"20rem"}
              position={"absolute"}
            >
              <img
                className={styles.letter}
                alt="abstraction"
                src={letter.src}
              />
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
                src={getRandomImage()}
              />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Section>
  );
}
