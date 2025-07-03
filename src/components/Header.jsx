import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { APP_LOGO_URL } from "../constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((store) => store.user);

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
    signOut(auth)
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-44" src={APP_LOGO_URL} alt="Movies Logo" />
      {userInfo && (
        <div className="flex items-center mb-20">
          <img
            className="w-20 h-20 rounded ml-8"
            src={userInfo?.photoURL}
            alt="User Avatar"
          />
          <button
            className="p-4 cursor-pointer font-bold"
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
