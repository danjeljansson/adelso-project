import React from "react";
import { Posts } from "@/app/components/Posts";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Poster from "@/app/components/Poster";
import FindUs from "@/app/components/FindUs";
import BuyNowButton from "@/app/components/BuyNow";
import Shows from "@/app/components/Shows";
import Sponsors from "@/app/components/Sponsors";
import { sanityFetch } from "@sanity/lib/live";
import { BUTTON_QUERY, POSTER_QUERY, SPONSOR_QUERY } from "@sanity/lib/queries";

export default async function Page() {
  const { data: buttonData } = await sanityFetch({ query: BUTTON_QUERY });
  const { data: sponsorData } = await sanityFetch({ query: SPONSOR_QUERY });
  const { data: posterData } = await sanityFetch({ query: POSTER_QUERY });

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
      <Posts />
      <FindUs />
    </div>
  );
}
