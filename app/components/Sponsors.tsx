import React from "react";
import Image from "next/image";

type Sponsor = {
  name: string;
  url?: string;
  imageUrl: string;
};

type SponsorDocument = {
  _id: string;
  sponsors?: Sponsor[];
};

type SponsorsProps = {
  sponsorData: SponsorDocument[];
};

const Sponsors: React.FunctionComponent<SponsorsProps> = ({ sponsorData }) => {
  if (!sponsorData || sponsorData.length === 0) return null;

  const allSponsors = sponsorData.reduce<Sponsor[]>((acc, doc) => {
    if (doc.sponsors && doc.sponsors.length > 0) {
      return [...acc, ...doc.sponsors];
    }
    return acc;
  }, []);

  if (allSponsors.length === 0) return null;

  return (
    <section className="text-gold-600 mx-auto my-12 w-full max-w-3xl rounded-lg border border-gray-200 bg-gradient-to-br from-pastel-green to-white p-6 shadow-lg">
      <h2 className="text-gold-600 prose mb-6 text-center font-serif text-4xl italic leading-tight">
        Stort tack till
      </h2>
      <div className="mt-6 flex flex-wrap justify-center gap-8">
        {allSponsors.map((sponsor, index) => (
          <a
            key={`${sponsor.imageUrl}-${index}`}
            href={sponsor.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-40 w-40 items-center justify-center transition"
          >
            <Image
              src={sponsor.imageUrl}
              alt={sponsor.name}
              width={200}
              height={200}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
