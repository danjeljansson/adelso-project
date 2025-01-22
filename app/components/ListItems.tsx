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
  <li className="rounded bg-gray-950 px-2 py-1 text-center text-white transition-colors duration-200 hover:bg-gray-800">
    <Link
      to={to}
      smooth={true}
      duration={500}
      onClick={onClick}
      className="cursor-pointer"
    >
      {children}
    </Link>
  </li>
);

export default function HorizontalList({ onClick }: { onClick?: () => void }) {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row sm:gap-4">
      {/* For now */}
      {/*<ListItem onClick={onClick} to="home">*/}
      {/*  Home*/}
      {/*</ListItem>*/}
      <ListItem onClick={onClick} to="ensemble">
        Ensemble
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
