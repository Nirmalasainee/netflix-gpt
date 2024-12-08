import {signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ()=>{
    const navigate = useNavigate();
    const user = useSelector((store)=> store.user)

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            navigate("/error");
        });
    }
  
    return (
        <div className="absolute px-8 py-2 z-10 w-screen bg-gradient-to-b from-black flex justify-between">
            <img className="w-52 px-8 py-2 "
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

            { user && (<div className=" py-6">
                <button onClick={handleSignOut} className="text-white font-bold ">Sign Out</button>
            </div>
            )}
        </div>
    )
}

export default Header;