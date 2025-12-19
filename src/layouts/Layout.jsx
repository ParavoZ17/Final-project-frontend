import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../modules/Sidebar/Sidebar";
import Footer from "../modules/Footer/Footer";
import SearchDrawer from "../modules/Search/SearchDriwer.jsx";
import NotificationsDrawer from "../modules/Notifications/NotificationsDrawer.jsx";

import { useDispatch } from "react-redux";
import { logoutUser } from "../store/auth/authOperations";

import style from "./Layout.module.css";
import PostModal from "../shared/components/PostModal/PostModal";

const Layout = () => {
  const dispatch = useDispatch();

  const [activePanel, setActivePanel] = useState(null);
  const openPanel = (key) => setActivePanel(key);
  const closePanel = () => setActivePanel(null);

  const [modal, setModal] = useState(null);
  const openModal = (type, component, payload = null) => {
    if (type === "create") {
      setModal({
        type,
        component,
        payload,
      });
    }
  };
  const closeModal = () => setModal(null);

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
          openModal={openModal}
          closeModal={closeModal}
        />

        <main className={style.main}>
          <Outlet context={{ openModal }} />
        </main>

        <SearchDrawer open={activePanel === "search"} onClose={closePanel} />
        <NotificationsDrawer
          open={activePanel === "notifications"}
          onClose={closePanel}
        />
      </div>

      <Footer />

      <PostModal modal={modal} onClose={closeModal} />

      <button onClick={handleLogout} className={style.logout_btn}>
        Logout
      </button>
    </div>
  );
};

export default Layout;
