import React from "react";
import ShowComponent from "@/app/components/ShowComponent";
import { sanityFetch } from "@sanity/lib/live";
import { SHOWS_QUERY } from "@sanity/lib/queries";

const Shows = async () => {
  const { data: shows } = await sanityFetch({
    query: SHOWS_QUERY,
  });


  return (
    <>
      {shows.map((show) => (
        <ShowComponent key={show._id} show={show} />
      ))}
    </>
  );
};

export default Shows;
