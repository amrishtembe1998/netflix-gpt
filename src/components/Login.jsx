import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { useRef, useState } from "react";
import { validateForm } from "../utils/validate";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = validateForm(email.current.value, password.current.value, m);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User from Sign Up", user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/59555640?v=4",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              console.log("Profile Updated with ", name.current.value);
              dispatch(addUser({ uid, displayName, email, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`);
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed In: ", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            setErrorMessage("Invalid Credentials");
          } else {
            setErrorMessage(`${errorCode}-${errorMessage}`);
          }
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-2/6 absolute p-12 bg-gray-950/80 my-20 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="p-4 my-4 w-full border-white bg-gray-700 rounded-lg"
          ></input>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or mobile Number"
          className="p-4 my-4 w-full border-white bg-gray-700 rounded-lg"
        ></input>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full border-white bg-gray-700 rounded-lg"
        ></input>
        {errorMessage && (
          <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        )}
        <button
          className="p-4 my-6 bg-red-700 rounded-lg w-full font-bold"
          onClick={handleButtonClick}
        >
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
