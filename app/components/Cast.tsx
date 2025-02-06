import React from "react";
import { client } from "@sanity/lib/client";
import { CAST_QUERY } from "@sanity/lib/queries";
import CastListInteractive from "@/app/components/CastListInteractive";

export type CastMember = {
  name: string;
  role: string;
  about: string;
  castImageUrl: string;
};

const Cast = async () => {
  try {
    const castData: CastMember[] = await client.fetch(CAST_QUERY);

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
