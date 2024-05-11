import { Typography, Link } from "@mui/material";
import Stack from "@mui/material/Stack";
import bg from "assets/images/cloud-background-image.png";
import femfest from "assets/images/femfest.png";
import logo from "assets/images/logo.png";
import React from "react";
import styles from "styles/homepage.module.css";
import { Section } from "ui/templates/Section";
import { IDS } from "../../constants/landing";
import { TextLine } from "../../ui/atoms/TextLine";

export default function Home() {
  return (
    <Section
      sx={{ backgroundImage: `url(${bg.src})`, height: "150vh" }}
      id={IDS.HOME}
    >
      <Stack
        justifyContent="space-between"
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        display={{ xs: "none", lg: "flex" }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Typography
            fontSize="2rem"
            color="text.primary"
            fontFamily="Hlebozavod-Medium, serif"
          >
            <Link href={`#${IDS.ABOUT}`} underline="none" color="inherit">
              о нас
            </Link>
          </Typography>
          <Typography
            fontSize="2rem"
            color="text.primary"
            fontFamily="Hlebozavod-Medium, serif"
          >
            <Link href={`#${IDS.LECTURES}`} underline="none" color="inherit">
              лекции
            </Link>
          </Typography>
          <Typography
            fontSize="2rem"
            color="text.primary"
            fontFamily="Hlebozavod-Medium, serif"
          >
            <Link href={`#${IDS.EXHIBITION}`} underline="none" color="inherit">
              выставка
            </Link>
          </Typography>
        </Stack>
        <img
          className={styles.logo}
          alt="fem community"
          src={logo.src}
          width="205px"
          height="85px"
        />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Typography
            fontSize="2rem"
            color="text.primary"
            fontFamily="Hlebozavod-Medium, serif"
          >
            <Link href={`#${IDS.LECTURERS}`} underline="none" color="inherit">
              лекторы
            </Link>
          </Typography>
          <Typography
            fontSize="2rem"
            color="text.primary"
            fontFamily="Hlebozavod-Medium, serif"
          >
            <Link href={`#${IDS.MARKET}`} underline="none" color="inherit">
              маркет
            </Link>
          </Typography>
          <Typography
            fontSize="2rem"
            color="text.primary"
            fontFamily="Hlebozavod-Medium, serif"
          >
            <Link href={`#${IDS.PHOTO}`} underline="none" color="inherit">
              фото
            </Link>
          </Typography>
        </Stack>
      </Stack>
      <TextLine rotation={9.43}>
        лекции консультации выставки общение маркет дискуссии взаимопомощь
        кросс-дресс вечеринка лекции консультации выставки общение маркет
        дискуссии взаимопомощь
      </TextLine>
      <TextLine rotation={-0.11}>
        взаимопомощь кросс-дресс вечеринка лекции консультации выставки общение
        маркет дискуссии взаимопомощь лекции консультации выставки общение
        маркет дискуссии
      </TextLine>

      <Stack
        justifyContent="space-between"
        alignItems="center"
        style={{
          textAlign: "center",
          position: "relative",
        }}
        sx={{ top: { xs: "5%", lg: "20%" } }}
        direction={{ xs: "column", lg: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Typography
          fontSize="8rem"
          color="text.primary"
          fontFamily="Hlebozavod-Medium, serif"
        >
          1-2 июня
        </Typography>
        <img
          className={styles.femfest}
          alt="fem fest"
          src={femfest.src}
          width="502px"
          height="100%"
        />
        <Typography
          fontSize="2rem"
          color="text.primary"
          whiteSpace="pre-wrap"
          fontFamily="Hlebozavod-Medium, serif"
        >
          {`рефорум space \nбудва`}
        </Typography>
      </Stack>
    </Section>
  );
}
