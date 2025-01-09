import React from "react";
import { Posts } from "@/app/components/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { castData } from "@/app/data/castData";
import Hero from "@/app/components/Hero";
import CastList from "@/app/components/Cast";
import { aboutUsData } from "@/app/data/aboutUsData";
import About from "@/app/components/About";
import FindUs from "@/app/components/FindUs";

export default async function Page() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <Posts posts={posts} />
      <CastList cast={castData} />
      <About aboutUsData={aboutUsData} />
      <FindUs />
    </div>
  );
}
