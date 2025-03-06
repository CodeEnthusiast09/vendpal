import { useEffect, useState } from "react";
import { financialYear } from "../../data/financial-year-data";
import { BudgetTabs } from "./_components/budget-room-tab";
import { CurrencyCard } from "./_components/currency-card";
import { ConversionRateCard } from "./_components/conversion-rate-card";

export const BudgetRoom = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        setData(financialYear);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return <div className="w-[190px] h-[62px] bg-gray-200"></div>;
  }

  return (
    <div className="lg:ml-[34.2%] xl:ml-[30.8%] 2xl:ml-[19.9%] lg:mt-7">
      <BudgetTabs />

      <div className="md:px-[24px] py-5 md:py-10 text-sm md:text-[20px] lg:text-[16px] xl:text-[20px] font-medium flex flex-col md:flex-row items-center gap-[16px] md:gap-[32px] border-b border-primary-300">
        <p>Financial year </p>
        <div className="flex items-center gap-[24px]">
          <p className="flex items-center gap-[16px]">
            Start
            <span className="bg-primary-200 flex items-center px-2 py-3 md:px-[16px] md:py-[15px] rounded-[12px]">
              <img src="/calendar_month.svg" alt="calendar_month_logo" />
              <p>{data.start}</p>
            </span>
          </p>
          <p className="flex items-center gap-[16px]">
            End
            <span className="bg-primary-200 flex items-center px-2 py-3 md:px-[16px] md:py-[15px] rounded-[12px]">
              <img src="/calendar_month.svg" alt="calendar_month_logo" />
              <p>{data.end}</p>
            </span>
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-[24px] py-5 px-5 md:px-[24px]  md:py-10">
        <CurrencyCard />
        <ConversionRateCard />
      </div>
    </div>
  );
};
