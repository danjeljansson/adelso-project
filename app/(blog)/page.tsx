import React from "react";
import { Posts } from "@/app/components/Posts";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import FindUs from "@/app/components/FindUs";
import BuyNowButton from "@/app/components/BuyNow";
import Shows from "@/app/components/Shows";

export default async function Page() {
  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <BuyNowButton url="https://www.ticketmaster.com/" label="BOKA BILJETT" />
      <About />
      <Shows />
      <Posts />
      <FindUs />
    </div>
  );
}
