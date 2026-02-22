import React from "react";
import { Posts } from "@/app/components/Posts";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Poster from "@/app/components/Poster";
import FindUs from "@/app/components/FindUs";
import BuyNowButton from "@/app/components/BuyNow";
import Shows from "@/app/components/Shows";
import Sponsors from "@/app/components/Sponsors";
import Article from "@/app/components/Article";

import { sanityFetch } from "@sanity/lib/live"; // for other content
import {
  BUTTON_QUERY,
  POSTER_QUERY,
  SPONSOR_QUERY,
  ARTICLE_QUERY,
} from "@sanity/lib/queries";

import { client } from "@/sanity/lib/client"; // published-only client

export default async function Page() {
  const buttonData = await client.fetch(BUTTON_QUERY);
  const { data: sponsorData } = await sanityFetch({ query: SPONSOR_QUERY });
  const { data: posterData } = await sanityFetch({ query: POSTER_QUERY });
  const { data: articleData } = await sanityFetch({ query: ARTICLE_QUERY });

  return (
    <div className="flex flex-col justify-center">
      <Hero
        buttonData={{
          title: buttonData?.event ?? "",
          hasCast: buttonData?.hasCast,
        }}
      />
      {buttonData?.ticketUrl && (
        <BuyNowButton url={buttonData.ticketUrl} label="BOKA BILJETT" />
      )}
      <div className="flex w-full justify-center">
        <Poster posterData={posterData} />
      </div>
      <About />
      <Shows />
      <Sponsors sponsorData={sponsorData} />
      <Article articleData={articleData} />
      <Posts />
      <FindUs />
    </div>
  );
}
