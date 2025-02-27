import React from "react";
import { PortableText } from "@portabletext/react";
import { CREW_QUERYResult } from "@/sanity.types";

const Crew = ({ crewData }: { crewData: CREW_QUERYResult }) => {
  if (!crewData) {
    return null;
  }

  const bodyContent = crewData.body ?? [];

  return (
    <>
      <section
        id="crew-intro"
        className="text-gold-600 mx-auto my-12 w-full max-w-3xl rounded-lg border border-gray-200 bg-gradient-to-br from-pastel-green to-white p-6 shadow-lg"
      >
        <h2 className="text-gold-600 prose mb-6 text-center font-serif text-4xl italic leading-tight">
          {crewData.title}
        </h2>
        <h3 className="text-small text-1xl prose mb-6 text-center font-sans italic leading-tight text-black">
          {crewData.subheading}
        </h3>
        <div className="text-gold-600 leading-1.8 prose text-center text-lg">
          {bodyContent.length > 0 && <PortableText value={bodyContent} />}
        </div>
      </section>
    </>
  );
};

export default Crew;
