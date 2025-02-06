import React from "react";
import Cast from "@/app/components/Cast";
import Show from "@/app/components/Show";
import { client } from "@sanity/lib/client";
import { EVENT_QUERY } from "@sanity/lib/queries";

const Shows = async () => {
  const eventData = await client.fetch(EVENT_QUERY);

  if (!eventData) {
    return (
      <section className="my-12 text-center">
        <p className="text-gold-600 text-lg">
          No events found. Please check back later!
        </p>
      </section>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <Show eventData={eventData} />
      <Cast />
    </div>
  );
};

export default Shows;
