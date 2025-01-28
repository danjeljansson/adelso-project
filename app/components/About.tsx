"use client";
import React from "react";

type AboutProps = {
  intro: string;
  description: string;
};

type AboutUsData = {
  aboutUsData: AboutProps[];
};

const About: React.FunctionComponent<AboutUsData> = ({ aboutUsData }) => {
  return (
    <section
      id="about"
      className="mx-auto my-12 w-full max-w-3xl rounded-lg border border-gray-200 bg-gradient-to-br from-gray-800 to-black p-6 text-white shadow-lg"
    >
      <h2 className="text-gold-600 mb-6 text-center font-serif text-4xl italic leading-tight">
        {aboutUsData[0].intro}
      </h2>

      <p
        className="text-center text-lg leading-relaxed text-gray-200"
        style={{ lineHeight: "1.8" }}
      >
        {aboutUsData[0].description}
      </p>
    </section>
  );
};

export default About;
