import { IMG_URL } from "../utils/constants";

const MovieContainer = ({poster_path})=>{
    const imageUrl = poster_path ? `${IMG_URL}${poster_path}` : null;
    return (
        <div className="flex-shrink-0 m-2">
            <img className="w-40 rounded-md" alt="img_path" src={imageUrl} />
        </div>
    )
}

export default MovieContainer;