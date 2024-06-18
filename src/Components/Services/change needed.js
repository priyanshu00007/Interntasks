import axios from "axios";

const movidBasedWebsite = "https://api.themoviedb.org/3/trending/all/day?api_key=e0e013f11654962726d17a064721a5a8"
const api = "e0e013f11654962726d17a064721a5a8"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=e0e013f11654962726d17a064721a5a8';

const trendingmovies = axios.get(movidBasedWebsite);
// const getMovieByGenreId=(id)=>
//     axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
        movidBasedWebsite,
//     getMovieByGenreId
}