"use client";

import React from "react";
import { Link } from "react-scroll";

type ListItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
  to: string;
};

const ListItem: React.FunctionComponent<ListItemProps> = ({
  to,
  children,
  onClick,
}) => (
  <li
    onClick={onClick}
    className="rounded bg-amber-600 px-4 py-2 text-center transition-colors duration-200 hover:bg-blue-50"
  >
    <Link to={to} smooth={true} duration={500} className="cursor-pointer">
      {children}
    </Link>
  </li>
);

export default function HorizontalList({ onClick }: { onClick?: () => void }) {
  return (
    <ul className="flex max-w-xs flex-wrap items-center justify-center gap-4 sm:max-w-md lg:max-w-lg">
      <ListItem onClick={onClick} to="home">
        Home
      </ListItem>
      <ListItem onClick={onClick} to="ensemble">
        Ensamble
      </ListItem>
      <ListItem onClick={onClick} to="ticket">
        Boka Biljett
      </ListItem>
      <ListItem onClick={onClick} to="about">
        Om Oss
      </ListItem>
      <ListItem onClick={onClick} to="contact">
        Kontakt
      </ListItem>
    </ul>
  );
}
