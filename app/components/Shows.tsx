import React from "react";
import Cast from "@/app/components/Cast";
import Show from "@/app/components/Show";
import { EVENT_QUERY } from "@sanity/lib/queries";
import { sanityFetch } from "@sanity/lib/live";

const Shows = async () => {
  const { data: eventData } = await sanityFetch({ query: EVENT_QUERY });

  if (!eventData) {
    return (
      <section className="my-12 text-center">
        <p className="text-gold-600 text-lg">
          Mer om sommarens föreställning släpps inom kort!
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
