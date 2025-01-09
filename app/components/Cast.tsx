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
    <div className="p-8">
      <h2 className="mb-8 text-center text-3xl font-bold">Meet the Cast</h2>
      <ul className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {cast.map((member) => (
          <li
            key={member.name}
            className="flex h-[275px] w-[250px] cursor-pointer flex-col items-center justify-between overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            onClick={() => setSelectedMember(member)}
          >
            <div className="relative h-32 w-32 sm:h-40 sm:w-40">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
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
    </div>
  );
};

export default CastList;
