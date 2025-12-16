import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../modules/Sidebar/Sidebar";
import Footer from "../modules/Footer/Footer";
import SearchDrawer from "../modules/Search/SearchDriwer.jsx";
import NotificationsDrawer from "../modules/Notifications/NotificationsDrawer.jsx";

import { useDispatch } from "react-redux";
import { logoutUser } from "../store/auth/authOperations";

import style from "./Layout.module.css";

// 👇 Новий пост-модал
import PostModal from "../shared/components/PostModal/PostModal";
import CreatePost from "../shared/components/Post/CreatePost/CreatePost.jsx";

const Layout = () => {
  const dispatch = useDispatch();

  // Для drawer-панелей (search, notifications)
  const [activePanel, setActivePanel] = useState(null);
  const openPanel = (key) => setActivePanel(key);
  const closePanel = () => setActivePanel(null);

  // Для централізованого модального вікна постів
  const [postModal, setPostModal] = useState(null);
  const openPostModal = (type, payload = null) => {
    if (type === "create") {
      setPostModal({
        type,
        component: CreatePost,
        payload,
      });
    }
  };
  const closePostModal = () => setPostModal(null);

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
          openPostModal={openPostModal}
        />

        <main className={style.main}>
          <Outlet />
        </main>

        <SearchDrawer open={activePanel === "search"} onClose={closePanel} />
        <NotificationsDrawer
          open={activePanel === "notifications"}
          onClose={closePanel}
        />
      </div>

      <PostModal modal={postModal} onClose={closePostModal} />

      <button onClick={handleLogout} className={style.logout_btn}>
        Logout
      </button>
    </div>
  );
};

export default Layout;
