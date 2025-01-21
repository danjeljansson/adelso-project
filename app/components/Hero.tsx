"use client";

import React from "react";
import Header from "@/app/components/Header";
import BurgerMenu from "@/app/components/BurgerMenu";
import HorizontalList from "@/app/components/ListItems";

const Hero = () => {
  const [burgerOpen, setBurgerOpen] = React.useState(false);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-green-700 px-4 py-8 sm:py-4 lg:py-10">
      <BurgerMenu burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />

      <Header />

      <nav
        className={`fixed right-0 top-[60px] z-50 w-2/3 transform justify-evenly bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out sm:hidden ${
          burgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="items-right flex flex-col gap-12 p-2">
          <HorizontalList onClick={() => setBurgerOpen(false)} />
        </ul>
      </nav>
    </div>
  );
};

export default Hero;
