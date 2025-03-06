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
      <ul className="mx-auto grid w-full max-w-6xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-5">
        {cast.map((member) => (
          <li
            id="ensemble"
            key={member.name}
            className="flex h-[400px] w-[300px] cursor-pointer flex-col items-center justify-between overflow-hidden rounded-xl bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            onClick={() => setSelectedMember(member)}
          >
            {member.castImageUrl && (
              <div className="relative h-80 w-56">
                <Image
                  src={member.castImageUrl}
                  alt={`Portrait of ${member.name} as ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 224px, 50vw"
                  className="cursor-pointer rounded-lg object-cover object-[50%_40%] grayscale"
                />
              </div>
            )}
            <div className="flex h-full w-full flex-col p-4 text-center">
              <h3 className="truncate text-wrap text-2xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="truncate text-base text-gray-400">{member.role}</p>
              <p className="mt-2 line-clamp-3 text-base text-gray-500">
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
