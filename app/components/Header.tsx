"use client";

import Image from "next/image";
import React from "react";
import ListItems from "@/app/components/ListItems";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center bg-green-700 py-4">
      <div className="relative h-[200px] w-full max-w-screen-lg sm:h-[300px] md:h-[500px] lg:h-[600px] xl:max-h-[700px]">
        <Image
          src={"/images/hero.png"}
          alt="logo"
          width={800}
          height={800}
          priority={true}
          className="layout-fill object-cover"
        />
      </div>
      <nav>
        <ul className="hidden flex-row items-center justify-center sm:flex">
          <ListItems />
        </ul>
      </nav>
    </header>
  );
};
export default Header;
