import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";

const GptSearchBar = () =>{
    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null);

    const handleGptSearchClick = async () => {
        try {
          const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: searchText.current.value }],
            model: 'gpt-3.5-turbo',
          });
          
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