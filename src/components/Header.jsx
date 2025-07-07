import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { APP_LOGO_URL, SUPPORTED_LANGUAGES } from "../constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((store) => store.user);
  const gptSearchView = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    dispatch(changeLanguage(selectedLanguage));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe from the auth state listener when the component unmounts
    // to prevent memory leaks and unnecessary updates
    return () => unsubscribe();
  }, []);

  const onSignOutClickHandler = () => {
    signOut(auth).catch((error) => {
      navigate("/error");
    });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-32 mx-auto md:mx-0"
        src={APP_LOGO_URL}
        alt="Movies Logo"
      />
      {userInfo && (
        <div className="flex items-center mb-20 justify-between">
          {gptSearchView && (
            <select
              className="px-6 m-4 py-2 bg-gray-800 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option value={language.identifier} key={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white bg-purple-600/80 p-3 rounded-xl cursor-pointer hover:opacity-50 ml-4"
            onClick={handleGptSearchClick}
          >
            {gptSearchView ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="hidden md:inline-block w-20 h-20 rounded ml-4"
            src={userInfo?.photoURL}
            alt="User Avatar"
          />
          <button
            className="p-4 cursor-pointer font-bold text-white"
            onClick={onSignOutClickHandler}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
