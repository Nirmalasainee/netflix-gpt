import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ()=>{
    const movies = useSelector((store)=> store.movie);

    if(!movies) return;
    const {addTrailerVideo} = movies
    const {original_title, overview, id} = addTrailerVideo;
    return (
        <div className="">
             <VideoTitle title={original_title} overview={overview}/>
             <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;