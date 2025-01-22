import React from "react";
import { LuMenu } from "react-icons/lu";

type BurgerMenuProps = {
  burgerOpen: boolean;
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenu: React.FunctionComponent<BurgerMenuProps> = ({
  burgerOpen,
  setBurgerOpen,
}) => {
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <div className="fixed right-0 top-0 z-50 flex w-full justify-end bg-gray-700 opacity-20 sm:hidden">
      {burgerOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-950 opacity-50"
          onClick={() => setBurgerOpen(false)}
        ></div>
      )}
      <button
        onClick={toggleBurger}
        className="relative z-50 block text-white"
        aria-label="Meny"
        aria-expanded={burgerOpen}
      >
        <LuMenu size={32} />
        {burgerOpen}
      </button>
    </div>
  );
};

export default BurgerMenu;
