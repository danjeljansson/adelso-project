import React, { useEffect } from "react";
import Image from "next/image";

type ModalProps = {
  member: {
    name: string | null;
    role: string | null;
    about: string | null;
    castImageUrl: string | null;
  };
  onClose: () => void;
};

const Modal: React.FunctionComponent<ModalProps> = ({ member, onClose }) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative max-h-screen w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-2 top-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex flex-col items-center">
          {member.castImageUrl ? (
            <div className="relative mb-4 h-32 w-32">
              <Image
                src={member.castImageUrl}
                alt={member.name ?? ""}
                fill={true}
                sizes="(max-width: 640px) 160px, (max-width: 768px) 160px, 40vw"
                className="rounded-full object-cover grayscale"
              />
            </div>
          ) : (
            <div className="mb-4 h-32 w-32 rounded-full bg-gray-200"></div>
          )}
          <h3 className="text-2xl font-bold">
            {member.name ?? "Unknown Name"}
          </h3>
          <p className="text-gray-600">{member.role ?? ""}</p>
          <p className="mt-4 text-center text-gray-700">
            {member.about ?? "No additional information available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
