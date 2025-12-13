import style from "./Sidebar.module.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.module.css"; // Стилі для іконок та сайдбару
import Logo from "../../shared/components/Logo/Logo";
import {
  HomeIcon,
  HomeIconActive,
  SearchIcon,
  SearchIconActive,
  ExploreIcon,
  ExploreIconActive,
  MessagesIcon,
  MessagesIconActive,
  NotificationsIcon,
  NotificationsIconActive,
  CreatePostIcon
} from '../../assets/svg'

const Sidebar = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <>
      <div className={style.sidebar}>
        <Logo className={style.logo} onClick={() => navigate("/")} type="sidebar">
        </Logo>

        <div className={style.sidebar_item} onClick={() => navigate("/")}>
          <HomeIcon/> Home
        </div>

        <div
          className={style.sidebar_item}
          onClick={() => setIsSearchOpen(true)}
        >
          <SearchIcon/> Search
        </div>

        <div className={style.sidebar_item} onClick={() => navigate("/explore")}>
          <ExploreIcon/> Explore
        </div>

        <div className={style.sidebar_item} onClick={() => navigate("/messages")}>
          <MessagesIcon/> Messages
        </div>

        <div
          className={style.sidebar_item}
          onClick={() => setIsNotificationsOpen(true)}
        >
          <NotificationsIcon/> Notifications
        </div>

        <div className={style.sidebar_item} onClick={() => navigate("/create")}>
          <CreatePostIcon/> Create
        </div>

        <div className={style.sidebar_item} onClick={() => navigate("/profile")}>
          <div className={style.profile}></div> Profile
        </div>
      </div>

      {/* Модальне вікно для Search */}
      {isSearchOpen && (
        <div className={style.modal}>
          <div className={style.modal_content}>
            <button onClick={() => setIsSearchOpen(false)}>Закрити</button>
            <h3>Search</h3>
            <input type="text" placeholder="Search users or posts..." />
          </div>
        </div>
      )}

      {/* Модальне вікно для Notifications */}
      {isNotificationsOpen && (
        <div className={style.modal}>
          <div className={style.modal_content}>
            <button onClick={() => setIsNotificationsOpen(false)}>Закрити</button>
            <h3>Notifications</h3>
            <ul>
              <li>Нова лайкнув пост</li>
              <li>Хтось підписався на вас</li>
              <li>Новий коментар</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
