import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg"
          alt="Netflix Background Image"
        ></img>
      </div>
      <form className="w-2/6 absolute p-12 bg-gray-950/80 my-20 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full border-white bg-gray-700 rounded-lg"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or mobile Number"
          className="p-4 my-4 w-full border-white bg-gray-700 rounded-lg"
        ></input>

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full border-white bg-gray-700 rounded-lg"
        ></input>
        <button className="p-4 my-6 bg-red-700 rounded-lg w-full font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 w-6/12 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
