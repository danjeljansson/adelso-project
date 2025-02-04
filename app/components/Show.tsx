import React from "react";
import CastListInteractive from "@/app/components/CastListInteractive";
import { castData } from "@/app/data/castData";

const Show = () => {
  return (
    <>
      <section
        id="intro"
        className="text-gold-600 mx-auto my-12 w-full max-w-3xl rounded-lg border border-gray-200 bg-gradient-to-br from-pastel-green to-white p-6 shadow-lg"
      >
        <h2 className="text-gold-600 mb-6 text-center font-serif text-4xl italic leading-tight">
          Adelsö Friluftsteater presenterar <br />
          Den inbillade sjuke
        </h2>
        <h3 className="text-gold-600 text-1xl text-small mb-6 text-center leading-tight">
          <i>Le Malade Imaginaire</i>, som pjäsen heter på franska, är en
          klassisk komedi av den franske dramatikern Molière. Pjäsen hade
          urpremiär 1673.
        </h3>

        <p
          className="text-gold-600 text-center text-lg leading-relaxed"
          style={{ lineHeight: "1.8" }}
        >
          Handlingen kretsar kring Mamsell Argan, en hypokondrisk person som är
          besatt av sin hälsa och som ständigt tror att hon lider av olika
          allvarliga sjukdomar. I denna version är huvudkaraktären en kvinna.{" "}
          <br />
          Hon planerar att gifta bort sin dotter Angélique med en läkare för att
          säkerställa att hon alltid har medicinsk hjälp tillgänglig. Men
          såklart är Angélique förälskad i Cléante, en ung man som är vän till
          hennes musiklärare. Mamsell Argan är så upptagen av sina påhittade
          åkommor att hon försummar sin familj och sina relationer. <br />{" "}
          Pjäsen är en skarp satir som kritiserar medicinsk okunnighet och den
          tidens läkekonst, samtidigt som den utforskar teman som galenskap,
          kärlek, lavemang, girighet och familjerelationer.
          <br />
          Den inbillade sjuke är ett av Molières mest kända verk.
        </p>
      </section>

      <CastListInteractive cast={castData} />
    </>
  );
};

export default Show;
