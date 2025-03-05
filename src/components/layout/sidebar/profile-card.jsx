import { UserProfile } from "./profile-modal";
import { user } from "../../../data/user-data";
import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

export const ProfileCard = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        setUserData(user);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-md animate-pulse">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="xl:w-[344.5px] xl:h-[294px] bg-white rounded-[24px] p-[24px] border border-primary-300 flex flex-col justify-between">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={userData.avatar}
            alt={`${userData.name}'s avatar`}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-semibold">{userData.name}</h2>
      </div>
      <div className="mb-[24px]">
        <div className="flex items-center space-x-2 text-[#252624] mb-2">
          <MdOutlineEmail className="text-3xl" />
          <span className="text-lg">{userData.email}</span>
        </div>
        <div className="flex items-center space-x-2 text-[#252624] mt-1">
          <TbWorld className="text-3xl" />
          <span className="text-lg">{userData.location}</span>
        </div>
      </div>
      <UserProfile />
    </div>
  );
};
