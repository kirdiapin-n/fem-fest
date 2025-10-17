import { FAR_TELEGRAM_URL, IDS } from "constants/landing";
import {
  Button,
  Chip,
  Link,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import bg from "assets/images/cloud-background-image.webp";
import { Icons } from "icons";
import React, { useState } from "react";
import { Section } from "ui/templates/Section";

type Props = {
  tags: string[];
  customContent?: React.ReactNode;
};

const StyledLink = styled(Link)({
  color: "white",
  fontSize: "1.5rem",
  lineHeight: "2.5rem",
  textDecoration: "underline",
});

function List({ tags, customContent }: Props) {
  return (
    <Stack spacing={4} flex={1}>
      <Stack direction="row" gap={2} flexWrap="wrap">
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={
              <Typography fontSize="2.5rem" variant="h5" letterSpacing="0.3rem">
                {tag}
              </Typography>
            }
            variant="outlined"
            color="primary"
            sx={{
              height: "unset",
            }}
          />
        ))}
      </Stack>

      {customContent}
    </Stack>
  );
}

export default function Scheduler() {
  const [value, setValue] = useState("first");

  return (
    <Section
      id={IDS.SCHEDULER}
      title="Расписание"
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bg.src})`,
        minHeight: { xs: "unset", lg: "100vh" },
      }}
      color="white"
    >
      <Stack spacing={4} direction="column">
        <Tabs
          value={value}
          onChange={(_, val) => setValue(val)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            sx={{
              color: "text.primary",
              fontSize: { xs: "1.5rem", lg: "2rem" },
            }}
            label="Актуальное"
            value="first"
          />
          <Tab
            sx={{
              color: "text.primary",
              fontSize: { xs: "1.5rem", lg: "2rem" },
            }}
            label="Прошедшие мероприятия"
            value="second"
          />
        </Tabs>

        {value === "first" && (
          <Stack maxWidth={400} direction="row" gap={4} flexWrap="wrap">
            <List
              tags={["Каждое воскресенье"]}
              // items={getLectures(data, value, "big")}
              customContent={
                <Typography fontSize="1.5rem" lineHeight="2.5rem">
                  11:00 - Регулярная открытая встреча в{" "}
                  <StyledLink href={`#${IDS.CONTACTS}`}>
                    Reform Space Budva
                  </StyledLink>
                  : завтракаем и обсуждаем актуальную информацию по теме
                  феминизма.
                </Typography>
              }
            />

            <List
              tags={["14 сентября"]}
              // items={getLectures(data, value, "big")}
              customContent={
                <Typography fontSize="1.5rem" lineHeight="2.5rem">
                  18.30 - Фем Шабаш. Встреча в{" "}
                  <StyledLink href={`#${IDS.CONTACTS}`}>
                    Reform Space Budva
                  </StyledLink>
                  . Больше информации в посте{" "}
                  <StyledLink href={`https://t.me/FAR_Montenegro/228`}>
                    телеграм
                  </StyledLink>
                  .
                </Typography>
              }
            />
          </Stack>
        )}

        {value === "second" && (
          <Stack maxWidth={800} direction="row" spacing={4} flexWrap="wrap">
            <List
              tags={["Фемфест"]}
              // items={getLectures(data, value, "big")}
              customContent={
                <>
                  <Typography fontSize="1.5rem" lineHeight="2.5rem">
                    <StyledLink href={`#${IDS.MARKET}`}>Маркет</StyledLink> —
                    это ярмарка, где мастера и ремесленники представляли свои
                    уникальные изделия ручной работы.
                  </Typography>
                  <Typography fontSize="1.5rem" lineHeight="2.5rem">
                    <StyledLink href={`#${IDS.EXHIBITION}`}>
                      Выставка
                    </StyledLink>{" "}
                    — это событие, на котором художники представляли свои
                    работы, созданные в различных стилях и техниках.
                  </Typography>
                </>
              }
            />
          </Stack>
        )}
        <Stack alignItems="center" width="100%">
          <Button
            component="a"
            target="_blank"
            endIcon={<Icons.Telegram />}
            variant="contained"
            href={FAR_TELEGRAM_URL}
            size="large"
          >
            Подробнее о мероприятиях в
          </Button>
        </Stack>
      </Stack>
    </Section>
  );
}
