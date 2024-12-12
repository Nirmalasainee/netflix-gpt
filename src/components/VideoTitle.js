
const VideoTitle = ({title, overview})=>{
    return (
         <div className="w-screen aspect-video pt-[15%] px-8 absolute text-white bg-gradient-to-r from-black" alt="check">
            <h1 className="text-3xl font-bold px-4">{title}</h1>
            <p className="text-lg w-1/4 py-6 px-4">{overview}</p>
            <div className="px-4">
               <button className="text-black bg-white p-2 px-10 rounded-lg text-bold hover: bg-opacity-80 ">▶ Play</button>
               <button className="text-white bg-slate-500 p-2 px-10 rounded-lg text-bold mx-2"> More Info</button>
            </div>
         </div>   
    )
}

export default VideoTitle;