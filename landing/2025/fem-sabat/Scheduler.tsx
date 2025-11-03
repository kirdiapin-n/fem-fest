import { FAR_TELEGRAM_URL, IDS } from "constants/landing";
import { Button, Chip, Stack, Tab, Tabs, Typography } from "@mui/material";
import schedule from "api/2025/fem-sabat/schedule.json";
import abstraction from "assets/abstractions/horns_and_eyes.webp";
import { Icons } from "icons";
import NextLink from "next/link";
import React, { useState } from "react";
import { Section } from "ui/templates/Section";

type Props = {
  tags: string[];
  customContent?: React.ReactNode;
};

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
        background: "black",
        backgroundImage: `url(${abstraction.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 100%",
        backgroundSize: "contain",
        minHeight: { xs: "unset", lg: "100vh" },
      }}
      color="white"
    >
      <Stack spacing={4} direction="column">
        <Tabs
          value={value}
          onChange={(_, val) => setValue(val)}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Фем Шабаш" value="first" />
          <Tab label="Прошедшие мероприятия" value="second" />
        </Tabs>

        {value === "first" && (
          <Stack gap={4} flexWrap="wrap">
            {schedule.map((item, index) => (
              <Stack direction="row" spacing={2} key={index}>
                <Typography fontSize="1.5rem" whiteSpace="nowrap">
                  <time>
                    {item.start_time} - {item.end_time}
                  </time>
                </Typography>

                <Typography
                  fontSize="1.5rem"
                  sx={{
                    "& > span": {
                      color: "text.primary",
                      fontWeight: "bold",
                    },
                  }}
                  whiteSpace="pre-wrap"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </Stack>
            ))}
          </Stack>
        )}
        {value === "second" && (
          <Stack maxWidth={800} direction="row" spacing={4} flexWrap="wrap">
            <List
              tags={["Фемфест 2024"]}
              customContent={
                <>
                  <Typography fontSize="1.5rem" lineHeight="2.5rem">
                    Маркет — это ярмарка, где мастера и ремесленники
                    представляли свои уникальные изделия ручной работы.
                  </Typography>
                  <Typography fontSize="1.5rem" lineHeight="2.5rem">
                    Выставка — это событие, на котором художники представляли
                    свои работы, созданные в различных стилях и техниках.
                  </Typography>

                  <Button
                    component={NextLink}
                    variant="contained"
                    href="/2024/fem-fest"
                    sx={{ alignSelf: "self-start" }}
                  >
                    Перейти
                  </Button>
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
