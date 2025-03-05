import React from "react";

export const ConversionRateCard = () => {
  return (
    <div>
      <div className="border border-primary-300 rounded-[24px]">
        <h3 className="text-[20px] font-medium mt-[24px] pb-[24px] px-[24px] border-b border-primary-300">
          Conversion Rate
        </h3>

        <div className="p-[24px]">
          <div className="flex items-center gap-2 py-3 px-4 bg-primary-200 h-[62px] rounded-[12px] mb-[24px]">
            <div className="flex items-center gap-2">
              <div className="h-[30px] w-[45px]">
                <img src="/flag1.png" alt="nigerrian_flag" />
              </div>
              <span className="font-semibold text-lg">NGA</span>
              <span className="text-lg">100,000</span>
            </div>
          </div>

          <div className="flex items-center gap-2 py-3 px-4 bg-primary-200 h-[62px] rounded-[12px]">
            <div className="flex items-center gap-2">
              <div className="h-[30px] w-[45px]">
                <img
                  src="/Flag_of_the_United_States 1.png"
                  alt="nigerrian_flag"
                />
              </div>
              <span className="font-semibold text-lg">USA</span>
              <span className="text-lg">60.8142</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[24px]  bg-secondary-300 text-secondary-400 rounded-[24px]">
        <p className="text-lg px-18 py-10">
          You cannot change the Principal Currency once the financial year has
          commenced
        </p>
      </div>
    </div>
  );
};
