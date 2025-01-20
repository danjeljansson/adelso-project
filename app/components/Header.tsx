"use client";

import Image from "next/image";
import React from "react";
import { LuMenu } from "react-icons/lu";
import ListItems from "@/app/components/ListItems";

const Header = () => {
  const [burgerOpen, setBurgerOpen] = React.useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <header className="flex flex-col items-center justify-center bg-purple-500 px-4 py-8">
      <div className="flex w-full justify-center">
        <Image
          src={"/images/hero.png"}
          alt="logo"
          width={600}
          height={600}
          priority={true}
          className="h-auto w-80 object-contain sm:w-60 lg:w-80"
        />
      </div>

      <div className="flex w-full justify-center">
        <button
          onClick={toggleBurger}
          className="block text-white sm:hidden"
          aria-label="Meny"
        >
          <LuMenu size={32} />
          {burgerOpen ? "Stäng" : "Öppna"}
        </button>
      </div>

      <nav>
        <ul
          className={`${
            burgerOpen ? "flex" : "hidden"
          } flex-row items-center gap-4 py-4 sm:hidden`}
        >
          <ListItems onClick={() => setBurgerOpen(false)} />
        </ul>
      </nav>

      <nav className="hidden w-full justify-center sm:flex">
        <ul className="flex flex-col items-center gap-4 py-4">
          <ListItems onClick={() => setBurgerOpen(false)} />
        </ul>
      </nav>
    </header>
  );
};
export default Header;
