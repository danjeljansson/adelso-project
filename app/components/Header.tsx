import Image from "next/image";
import React from "react";
import ListItems from "@/app/components/ListItems";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-purple-500">
      <Image
        src={"/images/hero.png"}
        alt="logo"
        width={400}
        height={400}
        style={{ width: "auto", height: "100%" }}
        priority={true}
      />
      <ListItems />
    </div>
  );
};
export default Header;
