"use client";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { budgetTabsData } from "./budget-room-tab-data";
import clsx from "clsx";

export const BudgetTabs = () => {
  const location = useLocation();

  return (
    <div className="border-b border-primary-300 overflow-hidden">
      <nav className="flex">
        {budgetTabsData.map((tab) => (
          <Link
            key={tab.title}
            to={tab.to}
            className={clsx(
              "px-4 py-2 text-xs text-center md:text-lg font-medium border-b-2 transition-colors whitespace-nowra",
              location.pathname === tab.to
                ? "border-primary md:ml-[24px] text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
            )}
          >
            {tab.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};
