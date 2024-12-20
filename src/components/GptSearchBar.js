import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import {API_OPTIONS} from "../utils/constants"
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () =>{
    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const searchMovieTMDB = async(movie) =>{
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' +
      movie +
      '&include_adult=false&language=en-US&page=1',
      API_OPTIONS);

      const json = await data.json();
      return json.results;
    }

    const handleGptSearchClick = async () => {
      const gptQuery = "Act as movie recommendation system and suggest some movies for the query" + 
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Stree, Golmal";
        try {
          const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          const gptMovieList = gptResult.choices?.[0]?.message?.content.split(",");
          const promiseArray = gptMovieList.map(movie=>searchMovieTMDB(movie));
          const tmdbResults = await Promise.all(promiseArray);

          dispatch(addGptMovieResult({movieNames: gptMovieList,tmdbResults: tmdbResults}));
        } catch (error) {
          if (error.response && error.response.data && error.response.data.code === 'insufficient_quota') {
            console.error('Error: You have exceeded your API usage quota. Please check your plan and billing details.');
          } else {
            console.error('An error occurred:', error);
          }
        }
    };
      

    return <div className="pt-[8%] flex justify-center">
        <form className=" w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
            <input 
                ref={searchText}
                type="text" 
                className="p-4 m-4 col-span-9" 
                placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button onClick={handleGptSearchClick} className="py-2 px-4 m-4 bg-red-800 text-white rounded-md col-span-3">
                {lang[langKey].search}
            </button>
        </form>
    </div>
}

export default GptSearchBar;