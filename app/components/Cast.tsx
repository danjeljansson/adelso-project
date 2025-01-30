"use client";

import Image from "next/image";
import React, { useState } from "react";
import Modal from "@/app/components/Modal";

type CastMember = {
  name: string;
  role: string;
  about: string;
  imageUrl: string;
};

type CastListProps = {
  cast: CastMember[];
};

const CastList: React.FunctionComponent<CastListProps> = ({ cast: cast }) => {
  const [selectedMember, setSelectedMember] = useState<CastMember | null>(null);

  return (
    <section id="ensemble" className="rounded-lg">
      <h2 className="mb-8 text-center font-serif text-3xl font-bold">
        Ensemble
      </h2>
      <ul className="mx-auto grid w-full max-w-5xl grid-cols-1 justify-items-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-3">
        {cast.map((member) => (
          <li
            key={member.name}
            className="flex h-[300px] w-[220px] cursor-pointer flex-col items-center justify-between overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-xl"
            onClick={() => setSelectedMember(member)}
          >
            <div className="relative h-40 w-40 p-10 sm:h-40 sm:w-40">
              <Image
                src={member.imageUrl}
                alt={`Porträtt av ${member.name} i rollen som ${member.role} i Den Inbillade Sjuke`}
                fill={true}
                sizes="(max-width: 640px) 160px, (max-width: 768px) 240px, 40vw"
                className="cursor-pointer rounded-t-lg object-cover grayscale"
              />
            </div>
            <div className="flex h-full w-full flex-col p-4 text-center">
              <h3 className="truncate text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="truncate text-sm text-gray-400">{member.role}</p>
              <p className="mt-2 line-clamp-3 overflow-hidden text-ellipsis text-sm text-gray-500">
                {member.about}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {selectedMember && (
        <Modal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
};

export default CastList;
