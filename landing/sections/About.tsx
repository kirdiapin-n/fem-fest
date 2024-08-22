import { IDS } from "constants/landing";
import { Box, Grid, Typography } from "@mui/material";
import founders from "api/founders.json";
import letter from "assets/images/f-letter.webp";
import womanRights from "assets/images/womans-rights.webp";
import React from "react";
import styles from "styles/about.module.css";
import { Stack } from "ui/atoms/Stack";
import { Section } from "ui/templates/Section";
import { getRandomImage } from "utils/images";
import { Photo } from "../../ui/atoms/Photo";

export default function About() {
  return (
    <Section id={IDS.ABOUT} title={"о нас"}>
      <Stack sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Stack direction="column" width={{ xs: "100%", lg: "70%" }}>
          <Typography>
            <b>Кто мы:</b> мы группа фем активист_ок.
          </Typography>

          <Typography>
            <b>Наша миссия:</b> смена социальной нормы в области дискриминации
            женщин,противостояние культуре насилия.
          </Typography>

          <Typography>
            <b>Наша цель:</b> создать мультифункциональное профем комьюнити -
            поддерживающее, помогающее, обучающее, вдохновляющее.
          </Typography>

          <Typography>
            Мы считаем важным вести просветительскую и активисткую деятельность,
            освещать проблемы женщин (в том числе специфические, связанные с
            эмиграцией):
          </Typography>

          <Box component="ol" type="a">
            <Typography component="li">
              насилие во всех его проявлениях, будь то финансовое,
              эмоциональное, физическое, психологическое, вербальное,
              аутоагрессия (т.е по отношению к самому себе);
            </Typography>
            <Typography component="li">
              стеклянный потолок, а также в целом сложности с поиском работы в
              условиях эмиграции;
            </Typography>
            <Typography component="li">
              сложности с адаптацией и социализацией.
            </Typography>
          </Box>

          <Typography>
            <u>Для этого мы:</u>
          </Typography>

          <Typography>
            Каждое воскресенье проводим фемзавтраки в разных форматах. Например,
            пикник, распродажа, "просто поныть", общение, арт-медитация,
            дискуссии на актуальные темы.
          </Typography>

          <Typography>
            Каждый второй четверг — лекции, на которых мы изучаем и обсуждаем
            волны феминизма, феминитивы, стереотипы и т.п. В наших мероприятиях
            принимают участие мужчины, женщины и небинарные люди. Здесь можно
            открыто делиться своими проблемами, трудностями и получить понимание
            и поддержку. Сейчас у нас формируется психологическая группа
            поддержки: первая - для поддержи родителей в эмиграции, вторая - для
            тех, у кого нет детей.
          </Typography>

          <Typography>
            <u>Также мы хотим:</u>
          </Typography>

          <Box component="ul">
            <Typography component="li">
              Создать горизонтальное феминистское комьюнити, оказывающего
              реальную поддержку женщинам: психологическую, консультационную и
              кризисную помощь - в различных жизненных ситуациях;
            </Typography>
            <Typography component="li">
              Уделить особое внимание вопросам профессиональной реализации
              женщин;
            </Typography>
            <Typography component="li">
              Расширить нашу просветительскую деятельность: выпускать
              тематическую литературу и памятки по секс-просвету, феминизму;
              проводить лекции и дискуссии с известными спикерками.
            </Typography>
          </Box>
        </Stack>

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
              src={getRandomImage()}
            />
          </Box>
        </Box>
      </Stack>

      <Grid pt={2} container spacing={4}>
        {founders.map((data, index) => (
          <Grid key={index} item xs={6} sm={4} md={2}>
            <Stack direction="column">
              <Photo withoutFilters url={data.photo_url} />

              <Typography fontWeight="bolder" fontSize="1.3rem">
                {data.name}
              </Typography>

              <Typography fontSize="0.8rem">{data.description}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
