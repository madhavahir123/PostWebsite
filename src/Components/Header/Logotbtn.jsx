import { useDispatch } from "react-redux";
import { logout } from "../../Store/Authslice";
import authServies from "../../Appwrite/auth";

function Logotbtn() {
  const dispacth = useDispatch();
  const logouthandler = () => {
    authServies.logout().then(() => {
      dispacth(logout());
    });
  };

  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logouthandler}
    >
      Logout
    </button>
  );
}

export default Logotbtn;
