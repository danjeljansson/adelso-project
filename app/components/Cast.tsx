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
    <section id="ensemble" className="p-4">
      <h2 className="mb-8 text-center text-3xl font-bold">Ensemble</h2>
      <ul className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-4 md:gap-6 lg:gap-4 xl:gap-3">
        {cast.map((member) => (
          <li
            key={member.name}
            className="flex h-[275px] w-[200px] cursor-pointer flex-col items-center justify-between overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            onClick={() => setSelectedMember(member)}
          >
            <div className="relative h-32 w-32 sm:h-36 sm:w-36">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill={true}
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 40vw"
                className="cursor-pointer rounded-t-lg object-cover"
              />
            </div>
            <div className="flex h-full w-full flex-col p-4 text-center">
              <h3 className="truncate text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="truncate text-sm text-gray-600">{member.role}</p>
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
