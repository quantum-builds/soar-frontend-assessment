import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import {
  SoarTaskLogo,
  AccountLogo,
  TransactionLogo,
  InvestmentLogo,
  CreditCardLogo,
  LoanLogo,
  MyPrivilagesLogo,
  ServiceLogo,
  ActiveDashboardLogo,
  ActiveSettingLogo,
  UnActiveDashboardLogo,
  UnActiveSettingLogo,
} from "../assets";

interface ISidebarItem {
  activeImage: string;
  unActiveImage: string;
  text: string;
  href: string;
}

const SideBarView = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Dashboards");

  const SIDEBAR_DATA: ISidebarItem[] = [
    {
      activeImage: ActiveDashboardLogo,
      unActiveImage: UnActiveDashboardLogo,
      text: "Dashboards",
      href: "/dashboard",
    },
    {
      activeImage: TransactionLogo,
      unActiveImage: TransactionLogo,
      text: "Transactions",
      href: "/dashboard",
    },
    {
      activeImage: AccountLogo,
      unActiveImage: AccountLogo,
      text: "Accounts",
      href: "/dashboard",
    },
    {
      activeImage: InvestmentLogo,
      unActiveImage: InvestmentLogo,
      text: "Investments",
      href: "/dashboard",
    },
    {
      activeImage: CreditCardLogo,
      unActiveImage: CreditCardLogo,
      text: "Credit Cards",
      href: "/dashboard",
    },
    {
      activeImage: LoanLogo,
      unActiveImage: LoanLogo,
      text: "Loans",
      href: "/dashboard",
    },
    {
      activeImage: ServiceLogo,
      unActiveImage: ServiceLogo,
      text: "Services",
      href: "/dashboard",
    },
    {
      activeImage: MyPrivilagesLogo,
      unActiveImage: MyPrivilagesLogo,
      text: "My Privilages",
      href: "/dashboard",
    },
    {
      activeImage: ActiveSettingLogo,
      unActiveImage: UnActiveSettingLogo,
      text: "Setting",
      href: "/setting",
    },
  ];

  return (
    <div className="max-md:hidden md:flex flex-none w-64 h-screen left-0 top-0 flex-col gap-10 items-center pt-[26px] border-r-[1px]">
      <div className="flex items-center gap-2">
        <img src={SoarTaskLogo} alt="Logo" />
        <h1 className="font-inter font-extrabold text-2xl leading-[30.26px]">
          Soar Task
        </h1>
      </div>
      <div className="flex flex-col gap-6 mt-6 w-full">
        {SIDEBAR_DATA.map((item, index) => (
          <Link key={index} to={item.href}>
            <div
              className={`flex items-center gap-[26px] cursor-pointer px-4 py-2 ${
                selectedItem === item.text
                  ? "text-black bg-gray-200"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedItem(item.text)}
            >
              <img
                src={
                  selectedItem === item.text
                    ? item.activeImage
                    : item.unActiveImage
                }
                alt={item.text}
                className="w-6 h-6"
              />
              <span className="font-semibold text-[18px]">{item.text}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBarView;
