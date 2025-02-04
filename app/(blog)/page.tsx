import React from "react";
import { Posts } from "@/app/components/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { castData } from "@/app/data/castData";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import FindUs from "@/app/components/FindUs";
import BuyNowButton from "@/app/components/BuyNow";
import CastListInteractive from "@/app/components/CastListInteractive";

export default async function Page() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <BuyNowButton url="https://www.ticketmaster.com/" label="BOKA BILJETT" />
      <About />
      <Posts posts={posts} />
      <CastListInteractive cast={castData} />
      <FindUs />
    </div>
  );
}
