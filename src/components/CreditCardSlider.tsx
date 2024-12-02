import React from "react";
import CreditCard from "./CreditCard";
import {
  ChipCardWhite,
  ChipCardBlack,
  CardLogoWhite,
  CardLogoBlack,
} from "../assets/index";

interface ICreditCard {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  chip: string;
  upperBgColor: string;
  footerBgColor: string;
  cardLogo: string;
  labelColor: string;
  infoColor: string;
}

const CREDITCARD_DATA: ICreditCard[] = [
  {
    balance: "$5,756",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    chip: ChipCardWhite,
    upperBgColor: "#000000",
    footerBgColor: "#5B5A6F",
    cardLogo: CardLogoWhite,
    labelColor: "#FFFFFF",
    infoColor: "#FFFFFF",
  },
  {
    balance: "$5,756",
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
    chip: ChipCardBlack,
    upperBgColor: "#FFFFFF",
    footerBgColor: "#FFFFFF",
    cardLogo: CardLogoBlack,
    labelColor: "#718EBF",
    infoColor: "#343C6A",
  },
];

const CreditCardSlider = () => {
  return (
    <div className="flex gap-10 overflow-x-scroll w-full whitespace-nowrap scrollbar-hide">
      {CREDITCARD_DATA.map((card, index) => (
        <CreditCard
          key={index}
          balance={card.balance}
          cardHolder={card.cardHolder}
          validThru={card.validThru}
          cardNumber={card.cardNumber}
          chip={card.chip}
          upperBgColor={card.upperBgColor}
          footerBgColor={card.footerBgColor}
          cardLogo={card.cardLogo}
          labelColor={card.labelColor}
          infoColor={card.infoColor}
        />
      ))}
    </div>
  );
};

export default CreditCardSlider;
