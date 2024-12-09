import { useRef, useState } from "react";
import Header from "./Header";
import {checkFormData} from "../utils/validate"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase"




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
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_medium.jpg" alt="bg-logo"/>
            </div>
            
            <form onClick={(e)=>{e.preventDefault()}} className="absolute  bg-black bg-opacity-80 m-4 py-6 px-8 w-2/5 min-w-[30%] max-w-[30%] my-32 mx-auto left-0 right-0 text-white rounded-lg">
                <p className="text-red-600">{errorMessage}</p>
                <h1 className="font-bold text-3xl py-4">
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