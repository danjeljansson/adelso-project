import React from "react";
import { Posts } from "@/app/components/Posts";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import FindUs from "@/app/components/FindUs";
import BuyNowButton from "@/app/components/BuyNow";
import Shows from "@/app/components/Shows";
import { sanityFetch } from "@sanity/lib/live";
import { BUTTON_QUERY } from "@sanity/lib/queries";

export default async function Page() {
  const { data: buttonData } = await sanityFetch({ query: BUTTON_QUERY });
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

      <About />
      <Shows />
      <Posts />
      <FindUs />
    </div>
  );
}
