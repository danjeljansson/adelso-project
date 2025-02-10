import React from "react";
import CastListInteractive from "@/app/components/CastListInteractive";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

type EventData = {
  title: string | null;
  subheading: string | null;
  publishedAt: string | null;
  body: PortableTextBlock[];
};

type ShowProps = {
  eventData: EventData;
};

const Show = ({ eventData }: ShowProps) => {
  return (
    <>
      <section
        id="intro"
        className="text-gold-600 mx-auto my-12 w-full max-w-3xl rounded-lg border border-gray-200 bg-gradient-to-br from-pastel-green to-white p-6 shadow-lg"
      >
        <h2 className="text-gold-600 prose mb-6 text-center font-serif text-4xl italic leading-tight">
          {eventData.title}
        </h2>
        <h3 className="text-small text-1xl prose mb-6 text-center font-sans italic leading-tight text-black">
          {eventData.subheading}
        </h3>
        <div className="text-gold-600 leading-1.8 prose text-center text-lg">
          <PortableText value={eventData.body} />
        </div>
      </section>

      <CastListInteractive cast={[]} />
    </>
  );
};

export default Show;
