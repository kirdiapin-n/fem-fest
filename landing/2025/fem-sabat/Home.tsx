import { IDS } from "constants/landing";
import { Box, Link, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import fem_sabat_event from "assets/images/fem-sabat-event.webp";
import femfest from "assets/images/fem_community_balck.webp";
import logo from "assets/images/logo.webp";
import bg from "assets/images/mashroom.webp";

import React from "react";
import styles from "styles/homepage.module.css";
import { TextLine } from "ui/atoms/TextLine";
import { Section } from "ui/templates/Section";
import { getRandomImageFor2025FemSabat } from "utils/images";

const StyledLink = styled(Link)({
  color: "text.primary",
  fontSize: "2rem",
  fontFamily: "Hlebozavod-Medium, serif",
  textDecoration: "none",
});

const StyledSection = styled(Section)({
  "&:before": {
    content: '" "',
    display: "block",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    opacity: 0.2,
    backgroundImage: `url(${bg.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 100%",
    backgroundSize: "contain",
    pointerEvents: "none",
  },
});

export default function Home() {
  return (
    <StyledSection
      overflow="hidden"
      position="relative"
      sx={{
        background:
          "linear-gradient(to bottom, #575755 0%, #F4F5F8 25%, #CECECE 75%, #4C4C4C 100%)",
        minHeight: { xs: "unset", lg: "100vh" },
        paddingTop: { xs: "70px", lg: "0" },
      }}
      id={IDS.HOME}
    >
      <Box
        display={{ xs: "none", lg: "block" }}
        sx={{ left: "20%", bottom: "0" }}
        width={"12rem"}
        position={"absolute"}
      >
        <img
          className={styles.abstractUnderDate}
          alt="abstraction"
          src={getRandomImageFor2025FemSabat()}
        />
      </Box>
      <Stack
        justifyContent="space-between"
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 0, lg: 0 }}
        display={{ xs: "none", lg: "flex" }}
        sx={{ margin: "0 auto", maxWidth: "1440px" }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 0, lg: 2 }}
        >
          <StyledLink href={`#${IDS.ABOUT}`} underline="hover">
            о нас
          </StyledLink>

          <StyledLink href={`#${IDS.SCHEDULER}`} underline="hover">
            расписание
          </StyledLink>

          <StyledLink href={`#${IDS.LECTURERS}`} underline="hover">
            лекторки
          </StyledLink>
        </Stack>
        <img
          className={styles.logo}
          alt="fem community"
          src={logo.src}
          width="285px"
          height="110px"
        />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <StyledLink href={`#${IDS.TICKETS}`} underline="hover">
            Билеты
          </StyledLink>

          <StyledLink href={`#${IDS.DONATIONS}`} underline="hover">
            Донаты
          </StyledLink>

          <StyledLink href={`#${IDS.CONTACTS}`} underline="hover">
            Контакты
          </StyledLink>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        gap={4}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Box maxWidth="400px">
          <img
            src={fem_sabat_event.src}
            width="100%"
            height="auto"
            alt="fem_sabat_event"
          />
        </Box>

        <Box>
          <Typography variant="h6" fontSize="2rem" letterSpacing="2px">
            когда: 15.ноября
          </Typography>
          <Typography
            variant="h6"
            fontSize="2rem"
            letterSpacing="2px"
            whiteSpace="pre-wrap"
            component={StyledLink}
            href={`#${IDS.CONTACTS}`}
            color="black"
            underline="hover"
          >
            {"где: Черногория, Будва,\nАкадемия знаний"}
          </Typography>
        </Box>
      </Stack>
      <Box
        sx={{
          top: "20%",
          width: "100%",
          position: "absolute",
          left: 0,
        }}
      >
        <TextLine
          rotation={7}
          text="лекции консультации выставки общение взаимопомощь DJ set вечеринка маркет"
        />
        <TextLine
          rotation={-0.11}
          bgcolor="black"
          color={"white"}
          left
          text="лекции консультации выставки общение взаимопомощь DJ set вечеринка маркет"
        />
      </Box>
      <Stack
        justifyContent="center"
        alignItems="center"
        style={{
          textAlign: "center",
          position: "relative",
        }}
        sx={{
          padding: { xs: "0", lg: "200px 0 80px 0" },
        }}
        direction={{ xs: "column", lg: "row" }}
        spacing={{ xs: 3, lg: 0 }}
      >
        <img className={styles.femfest} alt="fem fest" src={femfest.src} />

        <Box
          sx={{ right: "20%", bottom: "0" }}
          width={"8rem"}
          position={"absolute"}
        >
          <img
            className={styles.abstractUnderDate}
            alt="abstraction"
            src={getRandomImageFor2025FemSabat()}
          />
        </Box>
      </Stack>
    </StyledSection>
  );
}
