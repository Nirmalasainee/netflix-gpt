import { IMG_URL } from "../utils/constants";

const MovieContainer = ({poster_path})=>{
    const imageUrl = poster_path ? `${IMG_URL}${poster_path}` : null;
    return (
        <div className="flex-shrink-0 ">
            <img className="w-full h-auto max-w-xs rounded-md" alt="img_path" src={imageUrl} />
        </div>
    )
}

export default MovieContainer;