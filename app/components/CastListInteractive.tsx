"use client";

import React, { useState } from "react";
import Modal from "@/app/components/Modal";
import CastList from "@/app/components/Cast";
import type { CastMember } from "@/app/components/Cast";

type CastListInteractiveProps = {
  cast: CastMember[];
};
const CastListInteractive: React.FunctionComponent<
  CastListInteractiveProps
> = ({ cast }) => {
  const [selectedMember, setSelectedMember] = useState<CastMember | null>(null);

  return (
    <>
      <CastList cast={cast} handleCastClick={setSelectedMember} />
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
