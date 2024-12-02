import React from "react";

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

const CreditCard = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  chip,
  upperBgColor,
  footerBgColor,
  cardLogo,
  labelColor,
  infoColor,
}: ICreditCard) => {
  return (
    <article className=" flex flex-col font-lato xl-custom:w-1/2">
      <div
        className={`rounded-3xl overflow-hidden ${
          upperBgColor === "#FFFFFF" ? "border-[1px]" : ""
        }`}
      >
        <section
          className={`flex-[2] flex flex-col gap-8 px-6 pt-6 pb-9`}
          style={{ backgroundColor: upperBgColor }}
        >
          <div className="flex flex-row justify-between">
            <div className="flex-[1.7]">
              <p className="text-xs" style={{ color: labelColor }}>
                Balance
              </p>
              <p className="text-xl font-semibold" style={{ color: infoColor }}>
                {balance}
              </p>
            </div>
            <div className="flex-[0.8]"></div>
            <img src={chip} alt="Chip" className="flex-[0.5]" />
          </div>

          <div className="flex flex-row gap-16">
            <div className="flex-[1.7]">
              <p className="text-xs" style={{ color: labelColor }}>
                CARD HOLDER
              </p>
              <p
                className="text-base font-semibold"
                style={{ color: infoColor }}
              >
                {cardHolder}
              </p>
            </div>
            <div className="flex-[0.8]">
              <p className="text-xs" style={{ color: labelColor }}>
                VALID THRU
              </p>
              <p
                className="text-base font-semibold"
                style={{ color: infoColor }}
              >
                {validThru}
              </p>
            </div>
            <div className="flex-[0.5]"></div>
          </div>
        </section>

        <footer
          className={`flex-[1] flex  justify-between ${
            upperBgColor === "#FFFFFF" ? "border-t-[1px]" : ""
          } px-3 py-4`}
          style={{ backgroundColor: footerBgColor }}
        >
          <p
            className="text-[22px] leading-[26px]"
            style={{ color: infoColor }}
          >
            {cardNumber}
          </p>
          <img src={cardLogo} alt="Card Logo" className="h-[44px] w-[30px]" />
        </footer>
      </div>
    </article>
  );
};

export default CreditCard;
