import React from "react";
import { sanityFetch } from "@sanity/lib/live";

const DynamicButtons = async () => {
  try {
    const { event, hasCast } = await sanityFetch({
      query: `
        {
          "event": *[_type == "event" && defined(title)][0].title,
          "hasCast": count(*[_type == "cast"]) > 0
        }
      `,
    });

    return (
      <div className="container mx-auto p-4 text-center">
        {event && (
          <button className="m-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            {event}
          </button>
        )}

        {hasCast && (
          <button className="m-2 rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600">
            View Cast
          </button>
        )}

        {!event && !hasCast && (
          <p className="text-gray-500">No events or cast members found.</p>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);

    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-red-500">
          An error occurred. Please try again later.
        </p>
      </div>
    );
  }
};

export default DynamicButtons;
