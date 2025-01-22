"use client";

import React from "react";
import Header from "@/app/components/Header";
import BurgerMenu from "@/app/components/BurgerMenu";
import HorizontalList from "@/app/components/ListItems";
import Image from "next/image";

const Hero = () => {
  const [burgerOpen, setBurgerOpen] = React.useState(false);

  return (
    <div className="relative flex w-full flex-col">
      {/* Hero Image */}
      <div className="relative h-[50vh] w-full sm:h-[60vh] lg:h-[80vh]">
        <Image
          src={"/images/hero.png"}
          alt="logo"
          fill={true}
          priority={true}
          className="object-cover"
        />
      </div>

      {/* Burger Menu */}
      <BurgerMenu burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />

      {/* Header */}
      <div className="bg-custom-green relative hidden w-full py-4 sm:block">
        <Header />
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`fixed right-0 top-[30px] z-50 w-2/3 transform bg-gray-700 opacity-95 shadow-lg transition-transform duration-300 ease-in-out sm:hidden ${
          burgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-12 p-2">
          <HorizontalList onClick={() => setBurgerOpen(false)} />
        </ul>
      </nav>
    </div>
  );
};

export default Hero;
