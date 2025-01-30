"use client";

import React from "react";
import ListItems from "@/app/components/ListItems";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center bg-transparent">
      <nav>
        <ul className="hidden flex-row items-center justify-center sm:flex">
          <ListItems />
        </ul>
      </nav>
    </header>
  );
};
export default Header;
