import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { SCHOOL_QUERYResult } from "@/sanity.types";

type TheatreSchoolProps = {
  schoolPost: SCHOOL_QUERYResult[number];
};

export function TheatreSchool({ schoolPost }: TheatreSchoolProps) {
  const { title, mainImage, body } = schoolPost;

  return (
    <section
      id="school"
      className="text-gold-600 mx-auto my-12 w-full max-w-3xl rounded-lg border border-gray-200 bg-gradient-to-br from-pastel-green to-white p-6 shadow-lg"
    >
      {title && (
        <h2 className="text-gold-600 prose mb-6 text-center font-serif text-4xl italic leading-tight">
          {title}
        </h2>
      )}

      {mainImage?.asset?._ref && (
        <Image
          className="mx-auto mb-6 rounded-lg"
          src={urlFor(mainImage.asset._ref).width(600).height(400).url()}
          width={600}
          height={400}
          alt={mainImage.alt || title || ""}
        />
      )}

      <div className="text-gold-600 leading-1.8 prose overflow-hidden break-words text-center text-lg">
        {body && <PortableText value={body} />}
      </div>
    </section>
  );
}
