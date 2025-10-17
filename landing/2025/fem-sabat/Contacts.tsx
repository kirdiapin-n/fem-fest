import {
  FAR_INSTA_URL,
  FAR_MAIL_URL,
  FAR_TELEGRAM_URL,
  FAR_YOUTUBE_URL,
  IDS,
} from "constants/landing";
import { DEFAULT_ZOOM, REFORUM_SPACE_COORDS } from "constants/map";
import { Button, Link, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useState } from "react";
import { Section } from "ui/templates/Section";

export default function Contacts() {
  const [isShow, setIsShow] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const url = `https://www.google.com/maps?saddr=My+Location&daddr=${REFORUM_SPACE_COORDS.lat},${REFORUM_SPACE_COORDS.lng}`;

  const handleClick = () => setIsShow(!isShow);

  if (!isLoaded) return <div>Loading....</div>;

  return (
    <Section title="Контакты" id={IDS.CONTACTS}>
      <Stack spacing={4}>
        <Typography fontSize="2rem" textAlign="center" pb={4}>
          Место проведения мероприятия
          <Link pl={1} color="inherit" href={url} target="_blank">
            рефорум space budva
          </Link>
        </Typography>

        <GoogleMap
          zoom={DEFAULT_ZOOM}
          center={REFORUM_SPACE_COORDS}
          mapContainerStyle={{ width: "90%", height: "70vh", margin: "auto" }}
        >
          <Marker
            clickable
            title="Reforum Space Budva"
            position={REFORUM_SPACE_COORDS}
            onClick={handleClick}
          >
            {isShow && (
              <InfoWindow onCloseClick={() => setIsShow(false)}>
                <Stack>
                  <Button
                    variant="contained"
                    component="a"
                    href={url}
                    target="_blank"
                  >
                    Открыть в Google Maps
                  </Button>
                </Stack>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>

        <Stack
          direction={{ xs: "column", lg: "row" }}
          // direction="row"
          justifyContent="center"
          alignItems="center"
          // flexWrap="wrap"
          spacing={4}
          width="100%"
        >
          <Button
            component="a"
            sx={{ alignSelf: "center" }}
            size="large"
            href={FAR_TELEGRAM_URL}
            target="_blank"
            variant="contained"
            color="primary"
          >
            Telegram
          </Button>
          <Button
            component="a"
            sx={{ alignSelf: "center" }}
            size="large"
            href={`mailto:${FAR_MAIL_URL}`}
            target="_blank"
            variant="contained"
            color="primary"
          >
            Написать на почту
          </Button>
          <Button
            component="a"
            sx={{ alignSelf: "center" }}
            size="large"
            href={FAR_YOUTUBE_URL}
            target="_blank"
            variant="contained"
            color="primary"
          >
            Youtube
          </Button>
          <Button
            component="a"
            sx={{ alignSelf: "center" }}
            size="large"
            href={FAR_INSTA_URL}
            target="_blank"
            variant="contained"
            color="primary"
          >
            Instagram
          </Button>
        </Stack>
      </Stack>
    </Section>
  );
}
