import { allmovies, moviedetails } from "../type/allmovietype"
import { allMoviesApi } from "../type/api"
import axios from "axios"

//action get all movies 
export const getallmovies = ()=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get(allMoviesApi);
            dispatch({ type: allmovies, data: response.data.results, pages: response.data.total_pages })
          } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

//action to get movies when search 
export const searchmovies = (searchTitle)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchTitle}&api_key=d1a76bf7b2e89d3ba2f0992af7e4c18c`);
            dispatch({ type: allmovies, data: response.data.results, pages: response.data.total_pages })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

//action to get paginate with pages 
export const pagePaginate = (page)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d1a76bf7b2e89d3ba2f0992af7e4c18c&language=en-US&page=${page}`);
            dispatch({ type: allmovies, data: response.data.results, pages: response.data.total_pages })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

//action to get the movie details when click on it 
export const getMovieDetails = (movieId)=>{
    return async (dispatch)=>{
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d1a76bf7b2e89d3ba2f0992af7e4c18c&language=en-US`);
            dispatch({ type: moviedetails, data: response.data })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}
