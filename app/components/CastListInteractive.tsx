"use client";

import React, { useState } from "react";
import Modal from "@/app/components/Modal";
import { CastMember } from "@/app/components/Cast";
import Image from "next/image";

type CastListInteractiveProps = {
  cast: CastMember[];
};

const CastListInteractive: React.FC<CastListInteractiveProps> = ({ cast }) => {
  const [selectedMember, setSelectedMember] = useState<CastMember | null>(null);

  return (
    <>
      <ul className="mx-auto grid w-full max-w-5xl grid-cols-1 justify-items-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-3">
        {cast.map((member) => (
          <li
            key={member.name}
            className="flex h-[300px] w-[220px] cursor-pointer flex-col items-center justify-between overflow-hidden rounded-lg bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-xl"
            onClick={() => setSelectedMember(member)}
          >
            <div className="relative h-40 w-40">
              <Image
                src={member.castImageUrl}
                alt={`Portrait of ${member.name} as ${member.role}`}
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 160px, 40vw"
                className="cursor-pointer rounded-t-lg object-cover object-[50%_40%] grayscale"
              />
            </div>
            <div className="flex h-full w-full flex-col p-4 text-center">
              <h3 className="truncate text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="truncate text-sm text-gray-400">{member.role}</p>
              <p className="mt-2 line-clamp-3 text-sm text-gray-500">
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
    </>
  );
};

export default CastListInteractive;
