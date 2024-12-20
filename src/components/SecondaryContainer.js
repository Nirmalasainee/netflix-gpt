import MovieListContainer from "./MovieListContainer";

const SecondaryContainer = ()=>{
    return (
        <div className="bg-black -mt-[20%] z-10 w-screen">
            <MovieListContainer title={"Popular Movies"}/>
            <MovieListContainer title={"Trending Movies"}/>
            <MovieListContainer title={"NowPlaying Movies"}/> 
            <MovieListContainer title={"Horror Movies"}/>
        </div>
    )
}

export default SecondaryContainer;