import { DEFAULT_ZOOM, REFORUM_SPACE_COORDS } from "constants/map";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useState } from "react";
import { Section } from "ui/templates/Section";

export function Contacts() {
  const [isShow, setIsShow] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const handleClick = () => setIsShow(!isShow);

  if (!isLoaded) return <div>Loading....</div>;

  return (
    <Section maxHeight="100vh" height="100%">
      <GoogleMap
        zoom={DEFAULT_ZOOM}
        center={REFORUM_SPACE_COORDS}
        mapContainerStyle={{ width: "90%", height: "100%", margin: "auto" }}
      >
        <Marker
          clickable
          title="Reforum Space Budva"
          position={REFORUM_SPACE_COORDS}
          onClick={handleClick}
        >
          {isShow && (
            <InfoWindow onCloseClick={() => setIsShow(false)}>
              <h1>Contact Information</h1>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    </Section>
  );
}

export default Map;
