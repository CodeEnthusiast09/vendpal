import { ProfileCard } from "./_components/profile-card";
import { TeamsCard } from "./_components/teams-card";
import { LinksCard } from "./_components/links-card";
import { useState } from "react";
import { Button } from "../../Button";
import { FaRegUser } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <aside>
      {/* Mobile devices */}
      <div className="flex items-center gap-4 absolute right-0 top-2 z-20 lg:hidden lg:py-3">
        <Button
          type="button"
          onClick={toggleNav}
          className="bg-transparent hover:bg-transparent"
        >
          <FaRegUser className="bg-secondary-100 w-[40px] h-[40px] p-2 text-secondary-200 text-7xl lg:text-3xl rounded-full" />
        </Button>
      </div>

      {/* Desktop Navbar */}
      <div className="fixed top-30 left-0 h-[calc(100vh-4rem)] bg-white border-r border-primary-100 overflow-auto z-10 hidden lg:block transition-all duration-500">
        <div className="pt-6 flex flex-col z-50 gap-6 mx-5 mb-8">
          <ProfileCard />
          <TeamsCard />
          <LinksCard />
        </div>

        <div className="border-t border-primary-300">
          <div className="p-4 flex justify-center items-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              Terms of Service
            </a>
            <p className="text-4xl">&nbsp;•&nbsp;</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`px- xl:px-6 py-10 h-scree overflow-auto w-full md:w-[50vw] bg-white z-20 fixed transition-all duration-500 top-0 ${
          showNav ? "right-0" : " -right-[150vw]"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between relative">
          <Button
            onClick={toggleNav}
            className="bg-transparent hover:bg-transparent lg:hidden"
          >
            <IoMdClose className="text-secondary-200 text-2xl w-[40px] h-[40px] p-2 absolute -top-6 left-5 bg-secondary-100 rounded-full" />
          </Button>
        </div>
        <div className="pt-1 flex flex-col z-50 gap-6 mx-5 mb-8">
          <ProfileCard />
          <TeamsCard />
          <LinksCard />
        </div>
        <div className="border-t border-primary-300">
          <div className="p-4 flex justify-center items-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              Terms of Service
            </a>
            <p className="text-4xl">&nbsp;•&nbsp;</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
