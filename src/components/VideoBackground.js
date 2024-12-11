import { useEffect, useState } from "react";
import {API_OPTIONS} from "../utils/constants"



const VideoBackground = (id)=>{
    const[trailerId, setTrailerId] = useState(null);
    const getMovieVideos = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/912649/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        const filterVideo = json.results.filter((video)=> video.type === "Trailer");
        const trailer = filterVideo.length ? filterVideo[0] : json.results[0]; 
        setTrailerId(trailer.key);
    } 


    useEffect(()=>{
        getMovieVideos();
    },[])

    return (
        <div>
            <iframe 
                width="560"
                height="315" 
                src={"https://www.youtube.com/embed/" + trailerId}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" >
            </iframe>
        </div>
    )
}

export default VideoBackground;