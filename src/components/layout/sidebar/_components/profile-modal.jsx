import { useEffect, useState } from "react";
import { Modal } from "../../../Modal";
import { LuSettings2 } from "react-icons/lu";
import { user } from "../../../../data/user-data";

export const UserProfile = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);
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

    if (showUserProfile) {
      fetchUserData();
    }
  }, [showUserProfile]);

  return (
    <Modal
      className="w-[95vw] md:w-[60vw] lg:[30vw] xl:w-[35vw] 2xl:w-[25vw] text-red-100"
      buttonTitle="Set up your account"
      buttonIcon={<LuSettings2 className="text-3xl" />}
      trigerButtonClass="w-full block font-light"
      triggerButtonVariant="secondary"
      trigerButtonJustifyContent="justify-center"
      modalTitle="User Profile"
      modalTitleClassName={"justify-center"}
      show={showUserProfile}
      onShowCallback={() => setShowUserProfile(true)}
    >
      <div className="text-black-200 text-center">
        {isLoading ? (
          <div className="animate-pulse">Loading...</div>
        ) : userData ? (
          <div className="space-y-4">
            <div className="flex justify-center mb-4">
              <img
                src={userData.avatar}
                alt={`${userData.name}'s avatar`}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-xl text-secondary-200 font-semibold">
                Name: {userData.name}
              </h2>
              <p className="text-gray-600">Email: {userData.email}</p>
              <p className="text-gray-600">Location: {userData.location}</p>
            </div>
          </div>
        ) : (
          <div>No user data available</div>
        )}
      </div>
    </Modal>
  );
};
