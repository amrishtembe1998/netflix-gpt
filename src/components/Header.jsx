import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const userInfo = useSelector((store) => store.user);
  console.log("userInfo: ", userInfo);
  const navigate = useNavigate();
  const onSignOutClickHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      {userInfo && (
        <div className="flex">
          <img
            className="w-10 h-10 rounded my-2 ml-8"
            src={userInfo?.photoURL}
            alt="Netflix Avatar"
          />
          <button
            className="mb-6 p-4 cursor-pointer font-bold"
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
