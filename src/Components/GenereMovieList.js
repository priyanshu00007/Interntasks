import React from "react";
import GenereList from "./Constant/Genere";
import MovieList from "./MovieList";
const GenereMovieList = () => {
  return (
    <div>
      {GenereList.genere.map((item,index) =>index<=4&& (
        <div className="p-8 px-8 md:px-16">
          <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
          <MovieList genereId={item.id}/>
        </div>
      ))}
    </div>
  );
};

export default GenereMovieList;
