
const VideoTitle = ({title, overview})=>{
    return (
         <div className="pt-36 px-8" alt="check">
            <h1 className="text-4xl font-bold px-4">{title}</h1>
            <p className="text-lg w-1/4 py-6 px-4">{overview}</p>
            <div className="px-4">
               <button className="text-white bg-slate-500 p-2 px-10 rounded-lg text-bold ">▶ Play</button>
               <button className="text-white bg-slate-500 p-2 px-10 rounded-lg text-bold mx-2">More Info</button>
            </div>
         </div>   
    )
}

export default VideoTitle;