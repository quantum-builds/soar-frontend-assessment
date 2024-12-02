import React from "react";

interface ITransactions {
  transType: string;
  date: string;
  transAmount: string;
  transAmountColor: string;
  icon: string;
  iconColor: string;
}

const TransactionItem = ({
  transType,
  date,
  transAmount,
  transAmountColor,
  icon,
  iconColor,
}: ITransactions) => {
  return (
    <div className="flex items-center gap-3 ">
      <div
        className={`p-[14px] rounded-full flex justify-center items-center`}
        style={{
          backgroundColor: iconColor,
        }}
      >
        <img src={icon} />
      </div>

      <div className="flex-[2] space-y-1">
        <p className="font-medium text-4 text-[#232323] leading-5">
          {transType}
        </p>
        <p className="text-[15px] text-[#718EBF]">{date}</p>
      </div>

      <p
        className={`font-medium text-[15px]`}
        style={{
          color: transAmountColor,
        }}
      >
        {transAmount}
      </p>
    </div>
  );
};

export default TransactionItem;
