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
    <div className="mx-auto max-w-4xl p-6">
      <h2 className="mb-6 text-center text-3xl font-bold">Find Us</h2>
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex-1">
          <GoogleMap
            mapContainerStyle={{ width: "300px", height: "300px" }}
            center={center}
            zoom={11}
            onLoad={onLoad}
            options={{ disableDefaultUI: true, zoomControl: true }}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
        <div className="flex-1">
          <p>
            Our office is located at the address below. You can use the map to
            find directions from your location.
          </p>
          <address>
            <strong>Our Company</strong>
            <br />
            1234 Main St
            <br />
            Springfield, IL 62701
          </address>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
