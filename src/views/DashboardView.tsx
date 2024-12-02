import React from "react";
import CreditCardSlider from "../components/CreditCardSlider";
import TransactionCard from "../components/TransactionCard";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import QuickTransferSlider from "../components/QuickTransferSLider";
import AreaChartComponent from "../components/AreaChart";

// F5F7FA
const DashboardView = () => {
  return (
    <div className="h-full md:w-full bg-white md:bg-[#F5F7FA] flex flex-col gap-6 py-10 px-7">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="md:w-[70%] w-full flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-[22px]">My Cards</p>
            <p className="font-semibold text-[17px] cursor-pointer">See All</p>
          </div>

          <div className="w-full">
            <CreditCardSlider />
          </div>
        </div>

        <div className="flex-[1] flex flex-col gap-2">
          <p className="font-semibold text-[22px]">Recent Transactions</p>
          <TransactionCard />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="md:w-[70%] w-full flex flex-col gap-2">
          <p className="font-semibold text-[22px]">Weekly Activity</p>

          <div className="w-full">
            <BarChart />
          </div>
        </div>

        <div className="flex-[1] flex flex-col gap-2">
          <p className="font-semibold text-[22px]">Expense Statistics</p>
          <PieChart />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full ">
        <div className="md:w-[30%] flex flex-col gap-2 overflow-x-hidden">
          <p className="font-semibold text-[22px]">Quick Transfer</p>
          <QuickTransferSlider />
        </div>

        <div className="md:w-[70%] w-full flex flex-col gap-2 ">
          <p className="font-semibold text-[22px]">Weekly Activity</p>
          <div className="w-full">
            <AreaChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
