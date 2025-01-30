"use client";

import React, { useMemo, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const FindUs: React.FunctionComponent = () => {
  const mapRef = useRef<google.maps.Map | null>(null);

  const center = useMemo(
    () => ({ lat: 59.3786375823685, lng: 17.529518563900048 }),
    [],
  );

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
  });

  if (loadError) {
    console.error("Error loading Google Maps API:", loadError);
    return <div>Error loading map</div>;
  }

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;
    console.log("Map loaded:", map);
  };

  return (
    <section id="contact" className="mx-auto max-w-4xl p-6">
      <h2 className="mb-6 text-center font-serif text-3xl font-bold">
        Hitta Oss
      </h2>
      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <div className="flex-1">
          <div className="relative h-0 w-full pb-[75%]">
            <GoogleMap
              mapContainerStyle={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
              center={center}
              zoom={11}
              onLoad={onLoad}
              options={{ disableDefaultUI: true, zoomControl: true }}
            >
              <Marker position={center} />
            </GoogleMap>
          </div>
        </div>
        <div className="flex-1 flex-wrap text-center md:text-left">
          <strong>Från Brommaplan</strong>
          <p>
            Ta buss 311 till Sjöängen, gå av och ta en gratis färja över till
            Adelsö för att sedan promenera till Pannrummet (ca 10-15 min){" "}
            <strong>ELLER</strong> byt till buss 312 i Sjöängen, gå av vid
            hållplats Adelsö Gård och promenera därifrån till teatern.
          </p>
          <p>
            Hela resvägen omfattas av Stockholms Lokaltrafik (SL). Bussarna går
            minst en gång i timmen.
          </p>
          <p>
            Gratis parkering finns på området, se till att vara på plats i god
            tid...
          </p>
          <address>
            <br />
            Adelsö Ringväg 31
            <br />
            178 92 Adelsö
          </address>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
