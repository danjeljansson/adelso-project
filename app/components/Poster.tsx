import React from "react";
import Image from "next/image";

const Poster = ({
  posterData,
}: {
  posterData: { posterUrl: string; altText?: string; ticketUrl?: string };
}) => {
  if (!posterData?.posterUrl) return null;

  return (
    <section className="mx-auto flex justify-center sm:my-2 md:my-2">
      <div className="group relative overflow-hidden">
        {posterData.ticketUrl ? (
          <a
            href={posterData.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto"
          >
            <Image
              src={posterData.posterUrl}
              alt={posterData.altText || "Event poster"}
              width={1600}
              height={1000}
              className="mx-auto h-auto w-full max-w-[95%] rounded-lg object-cover shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-95 sm:max-w-[800px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px]"
            />
          </a>
        ) : (
          <Image
            src={posterData.posterUrl}
            alt={posterData.altText || "Event poster"}
            width={1600}
            height={900}
            className="mx-auto h-auto w-full max-w-[95%] rounded-lg object-cover shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-95 sm:max-w-[800px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px]"
          />
        )}
      </div>
    </section>
  );
};

export default Poster;
