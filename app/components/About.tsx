"use client";
import React from "react";

type AboutProps = {
  title: string;
  description: string;
};

type AboutUsData = {
  aboutUsData: AboutProps[];
};

const About: React.FunctionComponent<AboutUsData> = ({ aboutUsData }) => {
  return (
    <section
      id="about"
      className="mx-auto my-12 w-full max-w-3xl rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-lg"
    >
      <h2 className="mb-4 text-center text-3xl font-bold text-gray-800">
        {aboutUsData[0].title}
      </h2>
      <p className="text-center leading-relaxed text-gray-600">
        {aboutUsData[0].description}
      </p>
    </section>
  );
};

export default About;
