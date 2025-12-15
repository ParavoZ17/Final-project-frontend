import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {NAV_ITEMS} from "./nav.config.js";
import style from "./Navigation.module.css";
import {selectUser} from "../../../store/auth/authSelector";

const Navigation = ({openPanel, closePanel, activePanel, pendingRoute, setPendingRoute}) => {
  const location = useLocation();
  const authUser = useSelector(selectUser);
  const myProfilePath = authUser ? `/profile/${authUser.username}` : null;

  return (
    <>
      <nav className={style.nav}>
        {NAV_ITEMS.map((item) => {
          const key = item.key ?? item.to;

          const getIsActive = (routerIsActive) => {
            if (activePanel && item.type === "route") return false;

            if (item.type === "panel") return activePanel === item.key;

            if (pendingRoute) return item.to === pendingRoute;

            if (item.label === "Profile") return location.pathname === myProfilePath;

            return !activePanel && routerIsActive;
          };

          return (
            <NavLink
              key={key}
              to={item.type === "route" ? item.to : "#"}
              end={item.end}
              className={({isActive}) => {
                const active = getIsActive(isActive);
                return `${style.item} ${active ? style.active : ""}`;
              }}
              onClick={(e) => {
                if (item.type === "panel") {
                  e.preventDefault();
                  setPendingRoute(null);
                  activePanel === item.key ? closePanel() : openPanel(item.key);
                  return;
                }

                if (activePanel) {
                  setPendingRoute(item.to);
                  closePanel();
                }
              }}
            >
              {({isActive}) => {
                const active = getIsActive(isActive);
                const Icon = active ? item.iconActive : item.icon;

                return (
                  <>
                    <Icon className={style.icon}/>
                    <span className={style.label}>{item.label}</span>
                  </>
                );
              }}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}

export default Navigation;
