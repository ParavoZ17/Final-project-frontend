import {NavLink, Link} from "react-router-dom";
import {NAV_ITEMS} from "./nav.config.js";
import style from "./Navigation.module.css";


const Navigation = ({openPanel, closePanel, activePanel, pendingRoute, setPendingRoute }) => {

  return (
    <>
      <nav className={style.nav}>
        {NAV_ITEMS.map((item) => {
          const key = item.key ?? item.to;

          const getIsActive = (routerIsActive) => {
            if (item.type === "panel") return activePanel === item.key;

            if (pendingRoute) return item.to === pendingRoute;

            return !activePanel && routerIsActive;
          };

          return (
            <NavLink
              key={key}
              to={item.type === "route" ? item.to : "#"}
              end={item.end}
              className={({ isActive }) => {
                const active = getIsActive(isActive);
                return `${style.item} ${active ? style.active : ""}`;
              }}
              onClick={(e) => {
                if (item.type === "panel") {
                  e.preventDefault();
                  setPendingRoute(null);
                  activePanel === item.key ?  closePanel() : openPanel(item.key);
                  return;
                }

                if (activePanel) {
                  setPendingRoute(item.to);
                  closePanel();
                }
              }}
            >
              {({ isActive }) => {
                const active = getIsActive(isActive);
                const Icon = active ? item.iconActive : item.icon;

                return (
                  <>
                    <Icon className={style.icon} />
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

