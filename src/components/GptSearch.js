import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions"
import { BG_LOGO } from "../utils/constants";

const GptSearch = () =>{
    return (
        <>
        <div className="fixed -z-10">
            <img className="h-screen object-cover md:w-screen" src={BG_LOGO} alt="bg-logo"/>
        </div>
        <div className="">
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div></>
       
    )
}

export default GptSearch;