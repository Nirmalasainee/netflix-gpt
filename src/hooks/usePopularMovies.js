import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {addPopularMovies} from "../utils/moviesSlice"

const usePopularMovies =()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movie.addPopularMovies);

    const getMovieList = async()=>{
        const movieList = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS) 
        const jsonData = await movieList.json();
        dispatch(addPopularMovies(jsonData.results));
    }

    useEffect(() =>{
        !popularMovies && getMovieList();
    },[])
}

export default usePopularMovies;