import { DepartmentCard } from "./_components/department-card";
import { FaPlus } from "react-icons/fa6";
import { Button } from "../../components/Button";

export const Dashboard = () => {
  return (
    <div className="flex flex-col items-center gap-[24px] md:flex-row md:flex-wrap md:ml-[9%] lg:ml-[36.2%] xl:ml-[31.9%] 2xl:ml-[21.7%] lg:mt-7">
      <DepartmentCard />

      <div
        className={`w-[85.5%] bg-secondary-500 rounded-3xl md:w-[310px] h-[271px] flex flex-col justify-between items-center`}
      >
        <button className="bg-white flex justify-center items-center rounded-full w-24 h-24 mt-18">
          <FaPlus
            className="text-white bg-secondary-200 rounded-full p-6"
            size={72}
          />
        </button>

        <Button variant="secondary" size="lg" className="gap-3 mb-5">
          <img src="/contract_edit.svg" alt="contract_edit_logo" />
          Create a department
        </Button>
      </div>
    </div>
  );
};
