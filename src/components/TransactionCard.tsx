import React from "react";
import { PaypalTrans, CardTrans, JemmiWilsonTrans } from "../assets/index";
import TransactionItem from "./TransactionItem";

const TRANSACTION_DATA = [
  {
    transType: "Deposit from my Card",
    date: "28 January 2021",
    transAmount: "-$850",
    transAmountColor: "#FF4B4A",
    icon: CardTrans,
    iconColor: "#FFF5D9",
  },
  {
    transType: "Deposit Paypal",
    date: "25 January 2021",
    transAmount: "+$2,500",
    transAmountColor: "#41D4A8",
    icon: PaypalTrans,
    iconColor: "#E7EDFF",
  },
  {
    transType: "Jemi Wilson",
    date: "21 January 2021",
    transAmount: "+$5,400",
    transAmountColor: "#41D4A8",
    icon: JemmiWilsonTrans,
    iconColor: "#DCFAF8",
  },
];
const TransactionCard = () => {
  return (
    <div className="bg-white rounded-3xl p-[25px] flex flex-col gap-8">
      {TRANSACTION_DATA.map((transaction, index) => (
        <TransactionItem
          key={index}
          transType={transaction.transType}
          date={transaction.date}
          transAmount={transaction.transAmount}
          transAmountColor={transaction.transAmountColor}
          icon={transaction.icon}
          iconColor={transaction.iconColor}
        />
      ))}
    </div>
  );
};

export default TransactionCard;
