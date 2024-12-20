import {signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice"
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import {toggleGptSearchView} from "../utils/gptSlice"
import {changeLanguage} from "../utils/configSlice"

const Header = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store)=> store.user)
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error");
        });
    }
    
    const handleGPTSearch = ()=>{
        dispatch(toggleGptSearchView());
    }
    
    const handleLanguageChange = (e) =>{
        dispatch(changeLanguage(e.target.value));
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
        <div className="absolute px-4 py-2 z-10 w-screen bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
            <img className="w-52 px-8 py-2 mx-auto md:mx-0 "
            src={LOGO} alt="logo" />

            { user && (
            <div className="flex md:py-4 justify-end">
                {showGptSearch && <select className="p-2 m-2 bg-gray-300 rounded-md" onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>}
                <button onClick={handleGPTSearch} className="text-white p-2 m-2 bg-blue-700 rounded-md">
                    {showGptSearch ? "Home" : "GPT Search"}
                </button>
                <button onClick={handleSignOut} className="text-white font-bold md:px-6">Sign Out</button>
            </div>
            )}
        </div>
    )
}

export default Header;
