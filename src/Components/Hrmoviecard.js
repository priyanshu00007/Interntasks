import React from 'react'

const Image_Base_Url = "http://image.tmdb.org/t/p/original"; 
const Hrmoviecard = ({movie}) => {
  return (
    <div >
      <div className='movie-card' >
            <img src={Image_Base_Url+movie.backdrop_path} alt={movie.title} 
            className='className="w-[110px] md:w-[260px] rounded-lg hover:border-gray-400 hover:scale-110 '/>
            <h2 className='w-[110px] md:w-[260px] text-white mt-2 '>{movie.title}</h2>
        </div>
    </div>
  )
}

export default Hrmoviecard
