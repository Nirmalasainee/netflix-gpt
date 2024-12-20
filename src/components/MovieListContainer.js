import MovieContainer from "./MovieContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";


const MovieListContainer = ({title}) =>{
    usePopularMovies();
    const popularMovies = useSelector((store) =>store.movie);
    const movieList = popularMovies.addPopularMovies;

    return (
        <div className="w-full px-6">
            <h1 className="text-white text-xl md:text-xl font-semibold py-2">{title}</h1>
            <div className=" flex overflow-x-scroll ">
                <div className=" bg-transparent flex relative z-20 ">
                    {movieList && movieList.map((movie) => (<MovieContainer key={movie.id} poster_path={movie.poster_path} />))}
                </div>
            </div>
        </div>
    )
}

export default MovieListContainer;