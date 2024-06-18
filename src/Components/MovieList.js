    // import React, { useEffect, useState } from 'react';
    // import Globalapi from './Services/Globalapi';
    // import MovieCard from './moviecard';
    

    // // const screenwidth = window.innerWidth;

    // const MovieList = ({ genereId, index }) => {
    //     const [movielist, setmovielist] = useState([]);

    //     useEffect(() => {
    //         getMovieByGenereId();
    //     }, []);

    //     const getMovieByGenereId =() => {
    //             const resp =  Globalapi.getMovieByGenereId(genereId).then(resp=>{
    //                 // console.log(resp.data.result);
    //                 setmovielist(resp.data.result);   
    //             })
    //     };
    //     return (
    //         <div className=''>
    //             <div  className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-5 transition-all duration-150 ease-in cursor-pointer'>
    //                 {movielist.map((item, index) => index<=4&&(
    //                      <MovieCard movie={item}/>
    //                 ))}
    //             </div>
                
    //         </div>
    //     );
    // };

    // export default MovieList;



    import React, { useEffect, useState } from 'react'
    import Globalapi from './Services/Globalapi';
    import MovieCard from './moviecard';
    const MovieList = ({genereId}) => {

        useEffect(() => {
            getMovieByGenereId();
        }, [])

        const [movielist, setmovielist] = useState([]);
        

        const getMovieByGenereId=()=>{
            Globalapi.getMovieByGenereId(genereId).then(resp=>{
             console.log(resp.data.result);
             setmovielist(resp.data.result);
        }
            )
}

      return (
        <div>
            {movielist.map((item,index)=>{
                <MovieCard key={index}/>
            })}
        </div>
      )
    }
    
    export default MovieList
    