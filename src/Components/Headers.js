import React, { useState } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItems"; // Ensure the correct import path
import "./../Components/Header.css";
import logo from "../Logo-removebg-preview.png";
import icon from '../User-removebg-preview.png'
const GetHeader = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "Home", icon: HiHome },
    { name: "Search", icon: HiMagnifyingGlass },
    { name: "WatchList", icon: HiPlus },
    { name: "Original", icon: HiStar },
    { name: "Movies", icon: HiPlayCircle },
    { name: "Series", icon: HiTv },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img className="h-14  " src={logo} />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
        </div>
        <div
          className="md:hidden"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <HeaderItem name="" Icon={HiDotsVertical} />
          {toggle ? (
            <div className="absolute mt-3 bg-[#121212] border-[1px] border-grey-700 p-5">
              {menu.map(
                (item, index) =>
                  index > 3 && <HeaderItem name={item.name} Icon={item.icon} />
              )}
            </div>
          ) : null}
        </div>
      </div>
      <img className="h-14"  src={icon} alt="icon"/>
    </div>
  );
};

export default GetHeader;
