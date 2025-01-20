import React from "react";

interface BuyNowProps {
  url: string;
  label: string;
}

const BuyNowButton: React.FunctionComponent<BuyNowProps> = ({ url, label }) => {
  return (
    <section id="ticket" className="flex items-center justify-center p-2">
      <a
        href={url}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-label="Köp Biljett (Öppnas i nytt fönster)"
      >
        {label}
      </a>
    </section>
  );
};

export default BuyNowButton;
