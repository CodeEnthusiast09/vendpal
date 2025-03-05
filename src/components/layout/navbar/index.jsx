import { Button } from "../../Button";
import { useState } from "react";
import { NavBarItem } from "./_components/navbar-item";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { navItems } from "./_components/navbar-data";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  const Notification = () => (
    <button className="flex items-center gap-3">
      <div className="text-[#252624] lg:bg-secondary-500 lg:w-[64px] lg:h-[64px] flex items-center pl-2 lg:p-3 duration-300 ease-in-out rounded-full cursor-pointer">
        <MdNotificationsNone className="text-3xl lg:text-7xl" />
      </div>
      <p className="font-medium text-lg lg:hidden">Notification</p>
    </button>
  );

  const Message = () => (
    <button className="flex items-center gap-3">
      <div className="text-[#252624] lg:bg-secondary-500 lg:w-[64px] lg:h-[64px] flex items-center pl-2 lg:p-3 duration-300 ease-in-out rounded-full cursor-pointer">
        <MdOutlineChat className="text-3xl lg:text-7xl" />
      </div>
      <p className="font-medium text-lg lg:hidden">Message</p>
    </button>
  );

  return (
    <div>
      {/* Mobile devices */}
      <div className="flex items-center gap-1 relative left-0 top-2 mb-5 lg:hidden">
        <Button
          type="button"
          onClick={toggleNav}
          className="bg-transparent hover:bg-transparent"
        >
          <MdMenu className="text-secondary-200 text-3xl lg:text-3xl" />
        </Button>

        <div className="w-[178px] h-[40px] mt-4 mb-4 ">
          <img src="/VendPal Logo.png" alt="logo" className="object-cover" />
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden lg:flex lg:items-center lg:justify-between py-5 lg:px-6  bg-white z-20 transition-all duration-500 border-b border-primary-300 ">
        <div className="relative w-[178px] h-[40px] mt-4 mb-4">
          <img alt="logo" src={"/VendPal Logo.png"} className="object-cover" />
        </div>

        <div className="flex flex-row bg-primary-200 rounded-3xl">
          <ul className="flex flex-row">
            {navItems.map((item, index) => (
              <NavBarItem key={index} item={item} onClick={() => toggleNav()} />
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <Notification />
          <Message />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div
        className={`px-5 xl:px-6 py-10 h-screen overflow-auto w-3/4 md:w-[40vw] lg:w-[25vw] 2xl:w-[18vw] bg-white z-20 fixed lg:right-0 transition-all duration-500 top-0 border-r border-primary-300 ${
          showNav ? "left-0" : " -left-[150vw]"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between relative">
          <Button
            onClick={toggleNav}
            className="bg-transparent hover:bg-transparent lg:hidden"
          >
            <IoMdClose className="text-secondary-200 text-2xl w-[40px] h-[40px] p-2 absolute -top-6 right-5 bg-secondary-100 rounded-full" />
          </Button>
        </div>
        <nav className="pt-1 block z-50">
          <div className="flex flex-col">
            <ul className="flex flex-col gap-3 mb-5">
              {navItems.map((item, index) => (
                <NavBarItem
                  key={index}
                  item={item}
                  onClick={() => toggleNav()}
                />
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-12">
            <Notification />
            <Message />
          </div>
        </nav>
      </div>
    </div>
  );
};
