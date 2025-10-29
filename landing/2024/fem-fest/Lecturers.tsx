import { IDS } from "constants/landing";
import {
  Backdrop,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import data from "api/2024/fem-fest/data.json";
import { Author } from "landing/components/Author";
import React, { useState } from "react";
import { LectureType } from "types";
import { Section } from "ui/templates/Section";

const getYouTubeVideoID = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
};

// Функция для создания embed URL
const getEmbedURL = (url: string) => {
  const videoID = getYouTubeVideoID(url);

  return videoID ? `https://www.youtube.com/embed/${videoID}` : "";
};

function Lecturer(props: LectureType) {
  const { id, author, topic, second_author, video } = props;
  const [open, setOpen] = useState(false);
  const [confirmClose, setConfirmClose] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (videoStarted) {
      setConfirmClose(true);
    } else {
      setOpen(false);
    }
  };

  const handleConfirmClose = () => {
    setConfirmClose(false);
    setOpen(false);
    setVideoStarted(false);
  };

  const handleDialogClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).tagName !== "IFRAME") {
      setVideoStarted(true);
    }
  };

  return (
    <>
      <Stack id={String(id)} spacing={2} onClick={handleClickOpen}>
        <Stack direction="row">
          <Author
            {...author}
            sx={{ cursor: "pointer" }}
            isFirstSpeaker={!!second_author}
          />

          {second_author && <Author {...second_author} isSecondSpeaker />}
        </Stack>

        <Typography lineHeight="1.5rem">{topic.description}</Typography>
      </Stack>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent onMouseEnter={video ? handleDialogClick : undefined}>
          {video ? (
            <iframe
              width="100%"
              height="400px"
              src={getEmbedURL(video)}
              title="youtube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div>
              <Typography
                align="center"
                variant="h6"
                color="black"
                letterSpacing=".5rem"
                fontSize="1.3rem"
              >
                Здесь пока что ничего нет
              </Typography>
              <Typography color="black" align="center">
                Следите за новостями в наших{" "}
                <Link color="inherit" href={"https://t.me/FAR_Montenegro"}>
                  соцсетях
                </Link>
                .
              </Typography>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={confirmClose} onClose={() => setConfirmClose(false)}>
        <DialogTitle
          color="black"
          align="center"
          letterSpacing=".2rem"
          fontSize="1rem"
        >
          Вы уверены, что хотите закрыть видео?
        </DialogTitle>
        <Stack
          padding={2}
          justifyContent="space-between"
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          width={"100%"}
        >
          <Button
            component="a"
            sx={{ alignSelf: "center" }}
            fullWidth
            target="_blank"
            variant="contained"
            color="primary"
            onClick={() => setConfirmClose(false)}
          >
            Нет
          </Button>
          <Button
            component="a"
            sx={{ alignSelf: "center" }}
            fullWidth
            target="_blank"
            variant="contained"
            color="primary"
            onClick={handleConfirmClose}
          >
            Да
          </Button>
        </Stack>
      </Dialog>

      <Backdrop
        open={open}
        style={{ zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />
    </>
  );
}

export default function Lecturers() {
  return (
    <Section id={IDS.LECTURERS} title="Лекторы">
      <Typography
        align="left"
        variant="h6"
        color="gray"
        letterSpacing=".1rem"
        fontSize="0.7rem"
        marginBottom="24px"
      >
        *Нажмите на лектора, чтобы посмотреть запись
      </Typography>
      <Grid container spacing={6}>
        {data
          .filter(({ is_not_speaker }) => {
            return !is_not_speaker;
          })
          .map((lecturer, index) => (
            <Grid
              key={index}
              item
              xs={lecturer.second_author ? 12 : 6}
              md={lecturer.second_author ? 6 : 3}
            >
              <Lecturer {...lecturer} id={index} />
            </Grid>
          ))}
      </Grid>
    </Section>
  );
}
