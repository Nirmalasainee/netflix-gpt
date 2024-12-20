import { useSelector } from "react-redux";
import MovieContainer from "./MovieListContainer"

const GptMovieSuggestions = ()=>{
    const gpt = useSelector(store=> store.gpt);
    const {movieResults, movieNames} = gpt;

    if(!movieNames) return null;

    return <div className="p-4 bg-black text-white">
        <div>
            <h1></h1>
            {movieNames.map((movieName, index) =>  (<MovieContainer key={movieName} poster_path={movieName.poster_path} />))}    
        </div>
    </div>
}

export default GptMovieSuggestions;