import Image from "next/image";
import React from "react";

type CastMember = {
  name: string;
  role: string;
  about: string;
  imageUrl: string;
};

type CastListProps = {
  cast: CastMember[];
};

const CastList: React.FunctionComponent<CastListProps> = ({ cast }) => {
  return (
    <div>
      <h2>Cast</h2>
      <ul className="flex flex-wrap">
        {cast.map((member) => (
          <li key={member.name}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.about}</p>
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={80}
              height={40}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastList;
