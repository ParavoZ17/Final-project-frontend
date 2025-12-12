// Sidebar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.module.css"; // Стилі для іконок та сайдбару

const Sidebar = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="logo" onClick={() => navigate("/")}>
          ICHGRAM
        </div>

        <div className="sidebar-item" onClick={() => navigate("/")}>
          <span>🏠</span> Home
        </div>

        <div
          className="sidebar-item"
          onClick={() => setIsSearchOpen(true)}
        >
          <span>🔍</span> Search
        </div>

        <div className="sidebar-item" onClick={() => navigate("/explore")}>
          <span>🧭</span> Explore
        </div>

        <div className="sidebar-item" onClick={() => navigate("/messages")}>
          <span>💬</span> Messages
        </div>

        <div
          className="sidebar-item"
          onClick={() => setIsNotificationsOpen(true)}
        >
          <span>❤️</span> Notifications
        </div>

        <div className="sidebar-item" onClick={() => navigate("/create")}>
          <span>➕</span> Create
        </div>

        <div className="sidebar-item" onClick={() => navigate("/profile")}>
          <span>👤</span> Profile
        </div>
      </div>

      {/* Модальне вікно для Search */}
      {isSearchOpen && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setIsSearchOpen(false)}>Закрити</button>
            <h3>Search</h3>
            <input type="text" placeholder="Search users or posts..." />
          </div>
        </div>
      )}

      {/* Модальне вікно для Notifications */}
      {isNotificationsOpen && (
        <div className="modal">
          <div className="modal-content">
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
