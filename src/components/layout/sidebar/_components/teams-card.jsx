import { useDispatch, useSelector } from "react-redux";
import { GetTeamData } from "../../../../redux/slices/teamSlice";
import { useEffect } from "react";
import { LiaUploadSolid } from "react-icons/lia";
import { MdOutlineGroupWork } from "react-icons/md";

export const TeamsCard = () => {
  const dispatch = useDispatch();
  const { departments, units, loading } = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(GetTeamData());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-md animate-pulse">
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="space-y-2">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="xl:w-[344.5px] lg:h-[294px] bg-white rounded-[24px] border border-primary-300 flex flex-col justify-between">
      <div className="px-4 pt-4 pb-2 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">TEAMS</h2>
        <span className="bg-secondary-100 text-secondary-200 text-sm font-medium px-2.5 py-2 rounded-[12px]">
          Basic User
        </span>
      </div>
      <div className="px-4 space-y-2">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3 text-[#252624]">
            <div className="w-[24px] h-[24px]">
              <img src="/source_environment.svg" alt="departments" />
            </div>
            <span className="font-semibold text-lg">Departments</span>
          </div>
          <span className="font-semibold text-gray-800">{departments}</span>
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3 text-[#252624]">
            <MdOutlineGroupWork size={24} />
            <span className="text-lg font-semibold">Units</span>
          </div>
          <span className="font-semibold text-gray-800">{units}</span>
        </div>
      </div>
      <div className="p-4">
        <button className="w-full bg-white text-[#252624] py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2 border border-primary-300">
          <LiaUploadSolid className="font-bold" size={24} />
          <span className="text-lg">Upgrade your plan</span>
        </button>
      </div>
    </div>
  );
};
