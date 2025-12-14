import {useState} from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "../modules/Sidebar/Sidebar";
import Footer from "../modules/Footer/Footer";
import {useDispatch} from "react-redux";
import {logoutUser} from "../store/auth/authOperations";

import style from "./Layout.module.css"
import SearchDrawer from "../modules/Search/SearchDriwer.jsx";
import NotificationsDrawer from "../modules/Notifications/NotificationsDrawer.jsx";

const Layout = () => {
  const dispatch = useDispatch();
  const [activePanel, setActivePanel] = useState(null);
  const openPanel = (key) => setActivePanel(key);
  const closePanel = () => setActivePanel(null);

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Sidebar
          openPanel={openPanel}
          closePanel={closePanel}
          activePanel={activePanel}
        />
        <main className={style.main}>
          <Outlet/>
        </main>
        <SearchDrawer open={activePanel === "search"} onClose={closePanel} />
        <NotificationsDrawer open={activePanel === "notifications"} onClose={closePanel} />
      </div>
      {/*      <Modal open={modal.open} onClose={closeModal} title={modal.title}>
          {modal.content}
        </Modal>*/}
      {/*<Footer/>*/}
      <button onClick={handleLogout} className={style.logout_btn}>Logout</button>
    </div>
  );
};

export default Layout;
