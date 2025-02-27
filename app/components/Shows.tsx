import React from "react";
import Cast from "@/app/components/Cast";
import Show from "@/app/components/Show";
import Crew from "@/app/components/Crew";
import { CREW_QUERY } from "@sanity/lib/queries";
import { EVENT_QUERY } from "@sanity/lib/queries";
import { sanityFetch } from "@sanity/lib/live";

const Shows = async () => {
  const { data: eventData } = await sanityFetch({ query: EVENT_QUERY });
  const { data: crewData } = await sanityFetch({ query: CREW_QUERY });

  return (
    <div className="flex flex-col items-center">
      <Show eventData={eventData} />
      <Cast />
      <Crew crewData={crewData[0]} />
    </div>
  );
};

export default Shows;
