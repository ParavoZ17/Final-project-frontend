import { Outlet } from "react-router-dom";
import Sidebar from "../modules/Sidebar/Sidebar";
import Footer from "../modules/Footer/Footer";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/auth/authOperations";

const Layout = () => {

const dispatch = useDispatch();

const handleLogout = () => {
  dispatch(logoutUser());
};
  return (
    <>
      <Sidebar />
      <div>
        <Outlet />
        <button onClick={handleLogout}>Logout</button>

      </div>
      
      <Footer />
    </>
  );
};

export default Layout;
