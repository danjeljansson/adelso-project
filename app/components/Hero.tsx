"use client";

import React from "react";
import Header from "@/app/components/Header";
import BurgerMenu from "@/app/components/BurgerMenu";
import HorizontalList from "@/app/components/ListItems";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Image from "next/image";

const Hero = () => {
  const [burgerOpen, setBurgerOpen] = React.useState(false);

  return (
    <div className="relative flex w-full flex-col">
      <div className="relative h-[50vh] w-full sm:h-[60vh] lg:h-[80vh]">
        <Image
          src={"/images/hero.png"}
          alt="logo"
          fill={true}
          priority={true}
          className="object-cover"
        />
        <div className="absolute left-1/2 top-[15%] flex -translate-x-1/2 items-center gap-8 text-white md:top-[10%] lg:top-[5%]">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500"
          >
            <FaFacebook className="text-3xl sm:text-4xl lg:text-5xl" />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-black"
          >
            <AiFillTikTok className="text-3xl sm:text-4xl lg:text-5xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500"
          >
            <FaInstagram className="text-3xl sm:text-4xl lg:text-5xl" />
          </a>
        </div>
      </div>

      <BurgerMenu burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />

      <div className="bg-custom-green relative hidden w-full py-4 sm:block">
        <Header />
      </div>

      <nav
        className={`fixed right-0 top-[45px] z-50 h-full w-2/4 transform bg-gray-950 opacity-95 shadow-lg transition-transform duration-300 ease-in-out sm:hidden ${
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
