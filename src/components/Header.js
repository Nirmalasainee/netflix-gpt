import {signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice"
import { useEffect } from "react";
import { LOGO } from "../utils/constants";


const Header = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store)=> store.user)

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error");
        });
    }
  
    useEffect(() =>{
        const unsbscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}));
              navigate("/browse");
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
            }
        });
        // Unsbscribe when component unmount
        return () => unsbscribe();
    }, []);

    return (
        <div className="absolute px-4 py-2 z-10 w-screen bg-gradient-to-b from-black flex justify-between">
            <img className="w-52 px-8 py-2 "
            src={LOGO} alt="logo" />

            { user && (<div className=" py-6">
                <button onClick={handleSignOut} className="text-white font-bold ">Sign Out</button>
            </div>
            )}
        </div>
    )
}

export default Header;
