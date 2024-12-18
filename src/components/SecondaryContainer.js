import MovieListContainer from "./MovieListContainer";

const SecondaryContainer = ()=>{
    return (
        <div>
            <MovieListContainer title={"Popular Movies"}/>
            <MovieListContainer title={"Trending Movies"}/>
            <MovieListContainer title={"NowPlaying Movies"}/> 
            <MovieListContainer title={"Horror Movies"}/>
        </div>
    )
}

export default SecondaryContainer;