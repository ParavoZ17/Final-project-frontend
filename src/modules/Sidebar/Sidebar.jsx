import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import style from "./Sidebar.module.css"
import Logo from "../../shared/components/Logo/Logo";
import Navigation from "../../shared/components/Navigation/Navigation.jsx";
import Modal from "../../shared/components/Modal/Modal.jsx"


const Sidebar = ({openPanel, closePanel, activePanel}) => {
  const location = useLocation();
  const [pendingRoute, setPendingRoute] = useState(null);

  useEffect(() => {
    if (pendingRoute && location.pathname === pendingRoute) {
      setPendingRoute(null);
    }
  }, [location.pathname, pendingRoute]);
const isCreateOpen = activePanel === "create";
  return (
    <>
      <div className={style.sidebar}>
        <Logo
          closePanel={closePanel}
          activePanel={activePanel}
          setPendingRoute={setPendingRoute}
          type="sidebar"
        />
        <Navigation
          openPanel={openPanel}
          closePanel={closePanel}
          activePanel={activePanel}
          pendingRoute={pendingRoute}
          setPendingRoute={setPendingRoute}
        />
      </div>
      <Modal open={isCreateOpen} onClose={closePanel} title="Create Post">
        <textarea placeholder="Write something..." rows={6}></textarea>
        <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
          <button onClick={closePanel}>Cancel</button>
          <button>Post</button>
        </div>
      </Modal>
    </>
  );
};

export default Sidebar;
