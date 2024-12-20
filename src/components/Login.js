import { useRef, useState } from "react";
import Header from "./Header";
import {checkFormData} from "../utils/validate"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase"
import { BG_LOGO } from "../utils/constants";




const Login = ()=>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const[errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    };

    const validateFormData = () =>{
        const message = checkFormData(email.current.value, password.current.value, name.current?.value);
        setErrorMessage(message);
        if(message) return;

        if(!isSignInForm){
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current?.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {

                      }).catch((error) => {
                        setErrorMessage(error);
                    });

                  
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
        else{
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        }
  
    }

    return (
        <div className="">
            <Header />
            <div className="absolute top-0 left-0 w-full h-full object-cover"> 
                <img src={BG_LOGO} alt="bg-logo" className="w-full h-full object-cover" />
            </div>
            
            <form onClick={(e)=>{e.preventDefault()}} className="absolute  bg-black bg-opacity-80 md:m-4 py-6 px-8 md:w-2/5 md:min-w-[30%] md:max-w-[30%] md:my-32 md:mx-auto m-4 left-0 right-0 text-white rounded-lg">
                <p className="text-red-600">{errorMessage}</p>
                <h1 className="font-bold md:text-3xl text-lg md:py-4 py-2">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm &&  <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full rounded-md bg-gray-700"/>}
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full rounded-md bg-gray-700"/>
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full rounded-md bg-gray-700"/>
                <button className="p-4 my-6 bg-red-600 w-full rounded-md " onClick={validateFormData}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? " New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
                </p>
            </form>
            
        </div>
    )
}

export default Login;