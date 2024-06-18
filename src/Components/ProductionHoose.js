import React from "react";
import marvel from "../marvel.png";
import national from "../nationalG.png";
import pixer from "../pixar.png";
import disney from "../disney.png";
import starwars from "../starwar.png";
import marvelv from "../Marvelv.jpg";
import nationalv from "../Nationalv.jpg";
import pixerv from "../Pixer.jpg";
import disneyv from "../Disneyv.jpg";
import starwarsv from "../Starwarsv.png";

function ProductionHoose() {
  const ProductionHouseList = [
    {
      Id: "1",
      img: marvel,
      imgv: marvelv,
    },
    {
      Id: "2",
      img: national,
      imgv: nationalv,
    },
    {
      Id: "3",
      img: pixer,
      imgv: pixerv,
    },
    {
      Id: "4",
      img: disney,
      imgv: disneyv,
    },
    {
      Id: "5",
      img: starwars,
      imgv: starwarsv,
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
      {ProductionHouseList.map((item) => (
        <div
          key={item.Id}
          className="border-[2px] border-gray-600 rounded-lg hover:scale-110 
          transtion-all duration-300 ease-in cursor-pointer revative shadow-xl shadow-gray-800 "
        >
          <img
            src={item.img}
            className="w-full z-[1] hover:opacity-0 "z
            alt="Production House"
          />
          <img
            src={item.imgv}
            className="absolute  top-0 rounded-md z-0 opacity-0
             hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductionHoose;
