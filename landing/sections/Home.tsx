import { Typography, Link, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import bg from "assets/images/cloud-background-image.webp";
import femfest from "assets/images/femfest.webp";
import logo from "assets/images/logo.webp";
import React from "react";
import styles from "styles/homepage.module.css";
import { Section } from "ui/templates/Section";
import { IDS } from "../../constants/landing";
import { TextLine } from "../../ui/atoms/TextLine";
import { getRandomImage } from "../../utils/images";

const StyledLink = styled(Link)({
  color: "text.primary",
  fontSize: "2rem",
  fontFamily: "Hlebozavod-Medium, serif",
  textDecoration: "none",
});

export default function Home() {
  return (
    <Section
      overflow="hidden"
      position="relative"
      sx={{
        backgroundImage: `url(${bg.src})`,
        paddingTop: { xs: "70px" },
      }}
      id={IDS.HOME}
    >
      <Box
        display={{ xs: "none", lg: "block" }}
        sx={{ left: "20%", bottom: "-6%" }}
        width={"12rem"}
        height={"12rem"}
        position={"absolute"}
      >
        <img
          className={styles.abstractUnderDate}
          alt="abstraction"
          src={getRandomImage()}
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

          <StyledLink href={`#${IDS.EXHIBITION}`} underline="hover">
            выставка
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
          <StyledLink href={`#${IDS.LECTURERS}`} underline="hover">
            лекторы
          </StyledLink>

          <StyledLink href={`#${IDS.MARKET}`} underline="hover">
            маркет
          </StyledLink>

          <StyledLink href={`#${IDS.CONTACTS}`} underline="hover">
            Контакты
          </StyledLink>
        </Stack>
      </Stack>
      <TextLine rotation={7}>
        взаимопомощь кросс-дресс вечеринка лекции консультации выставки общение
        маркет дискуссии взаимопомощь кросс-дресс вечеринка лекции консультации
        выставки общение маркет дискуссии взаимопомощь
      </TextLine>
      <TextLine rotation={-0.11} left>
        выставки общение маркет дискуссии взаимопомощь кросс-дресс вечеринка
        лекции консультации выставки общение маркет дискуссии взаимопомощь
        лекции консультации выставки общение маркет дискуссии
      </TextLine>

      <Stack
        justifyContent="space-between"
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
        <Typography
          sx={{
            fontSize: { xs: "4rem", lg: "8rem" },
            lineHeight: "6rem",
            width: { xs: "100%", lg: "33%" },
          }}
          color="text.primary"
          fontFamily="Hlebozavod-Medium, serif"
        >
          1-2 июня
        </Typography>
        <img className={styles.femfest} alt="fem fest" src={femfest.src} />
        <Link href={`#${IDS.CONTACTS}`} underline="hover" color="text.primary">
          <Typography
            position="relative"
            sx={{
              fontSize: { xs: "3rem", lg: "5rem" },
              lineHeight: { xs: "4rem", lg: "4.5rem" },
            }}
            color="text.primary"
            whiteSpace="pre-wrap"
            fontFamily="Hlebozavod-Medium, serif"
          >
            {`рефорум space\nбудва`}
          </Typography>
        </Link>
        <Box
          sx={{ left: "0", top: "0" }}
          width={"8rem"}
          height={"8rem"}
          position={"absolute"}
        >
          <img
            className={styles.abstractUnderDate}
            alt="abstraction"
            src={getRandomImage()}
          />
        </Box>
        <Box
          sx={{ right: "20%", bottom: "0" }}
          width={"8rem"}
          height={"8rem"}
          position={"absolute"}
        >
          <img
            className={styles.abstractUnderDate}
            alt="abstraction"
            src={getRandomImage()}
          />
        </Box>
      </Stack>
    </Section>
  );
}
