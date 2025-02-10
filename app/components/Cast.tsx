import React from "react";
import { CAST_QUERY } from "@sanity/lib/queries";
import CastListInteractive from "@/app/components/CastListInteractive";
import { sanityFetch } from "@sanity/lib/live";

export type CastMember = {
  name: string | null;
  role: string | null;
  about: string | null;
  castImageUrl: string | null;
};

const Cast = async () => {
  try {
    const { data: castData } = await sanityFetch({
      query: CAST_QUERY,
    });

    if (!castData || castData.length === 0) {
      return (
        <p className="text-center text-gray-500">
          No cast members found. Please check back later!
        </p>
      );
    }

    return <CastListInteractive cast={castData} />;
  } catch (error) {
    console.error("Error fetching cast data:", error);

    return (
      <p className="text-center text-red-500">
        An error occurred while loading the cast. Please try again later.
      </p>
    );
  }
};

export default Cast;
