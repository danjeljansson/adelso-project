import Image from "next/image";
import React from "react";
import ListItems from "@/app/components/ListItems";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-purple-500">
      <Image src={"/images/hero.png"} alt="logo" width={400} height={400} />
      <ListItems />
    </div>
  );
};
export default Header;
