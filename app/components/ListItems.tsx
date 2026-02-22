"use client";

import { Link } from "react-scroll";
import React from "react";

type ButtonData = {
  title?: string;
  hasCast?: boolean;
};

type ListItemProps = {
  children: React.ReactNode;
  onClickAction?: () => void;
  to: string;
};

const ListItem: React.FunctionComponent<ListItemProps> = ({
  to,
  children,
  onClickAction,
}) => (
  <li className="rounded bg-gray-950 px-2 py-1 text-center text-white transition-colors duration-200 hover:bg-gray-800">
    <Link
      to={to}
      smooth={true}
      duration={500}
      onClick={onClickAction}
      className="cursor-pointer"
    >
      {children}
    </Link>
  </li>
);

export default function HorizontalList({
  onClickAction,
  buttonData,
}: {
  onClickAction?: () => void;
  buttonData?: ButtonData;
}) {
  return (
    <ul className="css:none flex flex-col items-center gap-12 sm:flex-row sm:gap-4">
      {buttonData?.title && (
        <ListItem onClickAction={onClickAction} to="intro">
          {buttonData.title}
        </ListItem>
      )}

      {buttonData?.hasCast && (
        <ListItem onClickAction={onClickAction} to="ensemble">
          Medverkande
        </ListItem>
      )}

      <ListItem onClickAction={onClickAction} to="contact">
        Hitta Hit
      </ListItem>
    </ul>
  );
}
