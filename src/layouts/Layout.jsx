import { Outlet } from "react-router-dom";
import Sidebar from "../modules/Sidebar/Sidebar";
import Footer from "../modules/Footer/Footer";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/auth/authOperations";

import style from "./Layout.module.css"

const Layout = () => {

const dispatch = useDispatch();

const handleLogout = () => {
  dispatch(logoutUser());
};
  return (
    <div className={style.container}>
      <div className={style.content}>
      <Sidebar />
      <Outlet />
      </div>
      <Footer />
      
      <button onClick={handleLogout} className={style.logout_btn}>Logout</button>
    </div>
  );
};

export default Layout;
