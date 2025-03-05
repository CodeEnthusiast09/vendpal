import { Button } from "../../components/Button";

export const CurrencyCard = () => {
  return (
    <div className="border border-primary-300 rounded-[24px]">
      <h3 className="text-[20px] font-medium mt-[24px] pb-[24px] px-[24px] border-b border-primary-300">
        Currency
      </h3>

      <div className="px-[24px] pt-[24px] pb-32 2xl:pb-18 text-[#252624] border-b border-primary-300">
        <div className="mb-[24px]">
          <p className="text-lg font-medium flex justify-between items-center mb-[16px]">
            Principal Currency
            <span className="bg-secondary-100 text-secondary-200 text-sm font-medium px-2.5 py-2 rounded-[12px]">
              Basic User
            </span>
          </p>
          <div className="flex items-center gap-2 py-3 px-4 bg-primary-200 h-[62px] rounded-[12px]">
            <div className="flex items-center gap-2">
              <div className="h-[30px] w-[45px]">
                <img src="/flag1.png" alt="nigerrian_flag" />
              </div>
              <span className="font-semibold text-lg">NGA</span>
              <span className="text-lg">Naira</span>
            </div>
          </div>
        </div>

        <div className="mb-[24px]">
          <p className="text-lg font-medium flex justify-between items-center mb-[16px]">
            Tax Type
          </p>
          <div className="flex items-center gap-2 py-3 px-4 bg-primary-200 h-[62px] rounded-[12px]">
            <div className="flex items-center gap-2">
              <span className="text-lg">Value Added Tax (VAT)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-[24px]">
            <p className="text-lg font-medium flex justify-between items-center mb-[16px]">
              Tax rate
            </p>
            <div className="flex items-center gap-2 py-3 px-4 bg-primary-200 h-[62px] rounded-[12px]">
              <div className="flex items-center gap-2">
                <span className="text-lg">Fixed amount</span>
              </div>
            </div>
          </div>
          <div className="mb-[24px]">
            <p className="text-lg font-medium flex justify-between items-center mb-[16px]">
              Tax rate unit
            </p>
            <div className="flex items-center gap-2 py-3 px-4 bg-primary-200 h-[62px] rounded-[12px]">
              <div className="flex items-center gap-2">
                <span className="text-lg">30.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="w-[90%] m-[24px] p-[24px] flex items-center justify-center gap-2 bg-secondary-200 text-secondary-100 rounded-[12px]">
        <img src="/contract_edit2.svg" alt="contract_edit_logo" />
        <span className="text-lg font-medium">Edit overview</span>
      </button>
    </div>
  );
};
