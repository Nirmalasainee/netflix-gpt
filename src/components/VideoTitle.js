
const VideoTitle = ({title, overview})=>{
    return (
         <div className="w-screen aspect-video md:pt-[15%] pt-[30%] md:px-8 absolute text-white bg-gradient-to-r from-black" alt="check">
            <h1 className="hidden md:block text-2xl font-bold px-4">{title}</h1>
            <p className=" hidden md:block w-1/4 py-2 px-4">{overview}</p>
            <div className="md:px-4 px-3">
               <button className="text-black bg-white p-1 md:px-10 rounded-lg text-sm md:text-lg text-bold hover:bg-opacity-80 ">▶ Play</button>
               <button className=" hidden md:inline-block text-white bg-slate-500 p-2 px-10 rounded-lg text-bold mx-2"> More Info</button>
            </div>
         </div>   
    )
}

export default VideoTitle;