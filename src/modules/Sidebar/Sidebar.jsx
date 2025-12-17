import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import style from "./Sidebar.module.css"
import Logo from "../../shared/components/Logo/Logo";
import Navigation from "../../shared/components/Navigation/Navigation.jsx";


const Sidebar = ({openPanel, closePanel, activePanel, openModal, closeModal}) => {
  const location = useLocation();
  const [pendingRoute, setPendingRoute] = useState(null);

  useEffect(() => {
    if (pendingRoute && location.pathname === pendingRoute) {
      setPendingRoute(null);
    }
  }, [location.pathname, pendingRoute]);

  return (
    <>
      <div className={style.sidebar} onClick={() => closeModal()}>
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
          openModal={openModal}
        />
      </div>
    </>
  );
};

export default Sidebar;