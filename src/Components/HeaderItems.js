import React from "react";

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className="header-item text-white flex justify-center items-center text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
      <Icon className="header-icon" />
      <h2 className=" ">{name}</h2>
    </div>
  );
};

export default HeaderItem;
