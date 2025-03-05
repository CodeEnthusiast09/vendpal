"use client";

import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveTab, resetTabFromPath } from "../../../redux/slices/tabSlice";
import { useEffect } from "react";

export const NavBarItem = ({ item, onClick }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const isActive =
    location.pathname === item.to ||
    location.pathname.startsWith(`${item.to}/`);

  useEffect(() => {
    if (document.referrer === "") {
      dispatch(resetTabFromPath(location.pathname));
    }
  }, [dispatch, location]);

  const handleClick = () => {
    dispatch(setActiveTab(item.name));
    onClick();
  };

  return (
    <li className={clsx("relative")}>
      <Link
        to={item.to}
        onClick={handleClick}
        className={clsx(
          "text-black-200 flex items-center p-3 duration-300 ease-in-out my-3",
          isActive
            ? "bg-white text-[#252624] max-xs:bg-secondary-100 lg:mx-3 rounded-2xl font-bold"
            : "rounded-2xl hover:text-secondary-200"
        )}
      >
        <span className="mr-3 text-2xl">{item.icon}</span>
        <span className="text-lg lg:text-sm xl:text-lg font-medium 3xl:text-4xl">{item.name}</span>
      </Link>
    </li>
  );
};
