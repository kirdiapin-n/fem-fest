import { IDS } from "constants/landing";
import { Box, Typography } from "@mui/material";
import letter from "assets/images/f-letter.webp";
import womanRights from "assets/images/womans-rights.webp";
import React from "react";
import styles from "styles/about.module.css";
import { Stack } from "ui/atoms/Stack";
import { Section } from "ui/templates/Section";
import { getRandomImage } from "utils/images";

export default function About() {
  return (
    <Section id={IDS.ABOUT} title={"о нас"}>
      <Stack spacing={4} direction={"column"}>
        <Stack sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Stack direction="column" width={{ xs: "100%", lg: "70%" }}>
            <Typography>
              <b>Кто мы:</b> мы группа фем активист_ток.
            </Typography>

            <Typography>
              <b>Наша цель:</b> создать поддерживающее профем
              комьютини,занимающаяся не только просвещением, но и помогающая
              женщинам в трудных ситуациях.
            </Typography>

            <Typography>
              Мы считаем важным вести просветительскую и активисткую
              деятельность, освещать проблемы женщин ( в том числе женщин в
              эмиграции):
            </Typography>

            <Box component="ol" type="a">
              <Typography component="li">
                насилие во всех его проявлениях будь то финансовое,
                эмоциональное, физическое, психологическое, вербальное,
                аутоагрессия (т.е по отношению с самому себе).
              </Typography>
              <Typography component="li">
                стеклянный потолок либо вообще сложность найти работу в условиях
                эмиграции
              </Typography>
              <Typography component="li">сложности с адаптацией</Typography>
            </Box>

            <Typography>
              <u>Для этого мы:</u>
            </Typography>

            <Typography>
              Проводим каждое воскресенье фемзавтрак с разными форматами ( вот
              некоторые которые уже были: распродажа, "поныть", общание, арт
              медитация, корректная лексика)
            </Typography>

            <Typography>
              Каждый 2 четверг лекции на которых мы изчаем и ведем дискуссии о
              волнах феминизма, феминитивах, стереотипах и т.п. в которых
              принимают участие мужчины, женщины и небинарные люди. На которых
              они делятся своими проблемами, с которыми они сталкиваются
              ежедневно. Сейчас у нас формируется психологическая группа
              поддержки: первая для поддержи родителей в эмиграции, вторая для
              тех у кого нет детей.
            </Typography>

            <Typography>
              <u>Так же мы хотим:</u>
            </Typography>

            <Box component="ul">
              <Typography component="li">
                Создать разветвленную горизонтальную структуру, которая в разных
                формах профессионально помогает женщинам, является
                поддерживающим комьюнити, носит не только идеологически
                просветительские функции, но и оказывает реальную поддержку:
                психологическую, помогает в трудных ситуациях, создает
                сообщество профессионалок.
              </Typography>
              <Typography component="li">
                Создавать просветительскую литературу и памятки по
                секс-просвету, феминизму, проводить лекции и дискуссии с
                известными спикерками.
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
