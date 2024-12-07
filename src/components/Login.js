import { useState } from "react";
import Header from "./Header";
const Login = ()=>{
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    };
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_medium.jpg" alt="bg-logo"/>
            </div>
            
            <form className="absolute py-6 px-12 bg-black bg-opacity-80 w-3/12 my-32 mx-auto left-0 right-0 text-white rounded-lg">
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm &&  <input type="text" placeholder="Full Name" className="p-4 my-4 w-full rounded-md bg-gray-700"/>}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full rounded-md bg-gray-700"/>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full rounded-md bg-gray-700"/>
                <button className="p-4 my-6 bg-red-600 w-full rounded-md">
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