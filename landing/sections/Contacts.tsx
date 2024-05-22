import { FAR_TELEGRAM_URL, IDS } from "constants/landing";
import { DEFAULT_ZOOM, REFORUM_SPACE_COORDS } from "constants/map";
import { Button } from "@mui/material";
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

        <Button
          component="a"
          sx={{ alignSelf: "center" }}
          size="large"
          href={FAR_TELEGRAM_URL}
          target="_blank"
          variant="contained"
          color="primary"
        >
          Ссылка на наш телеграм
        </Button>
      </Stack>
    </Section>
  );
}
