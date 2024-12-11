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
    <div className="p-6">
      <h2 className="mb-8 text-center text-3xl font-bold">Meet the Cast</h2>
      <ul className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {cast.map((member) => (
          <li
            key={member.name}
            className="flex max-h-[400px] max-w-[200px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            onClick={() => setSelectedMember(member)}
          >
            <div className="relative h-32 w-32 sm:h-40 sm:w-40">
              <Image
                src={member.imageUrl}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="h-24 w-24 cursor-pointer rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="mt-2 overflow-hidden truncate whitespace-nowrap text-sm text-gray-500">
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
