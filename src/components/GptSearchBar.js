import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";

const GptSearchBar = () =>{
    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null);

    const handleGptSearchClick = async ()=>{
        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: 'Say this is a test' }],
            model: 'gpt-3.5-turbo',
        });
        console.log(gptResult.choices);
    }


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