import style from "./DrawerShell.module.css";
import Header from "./Header.jsx";

const DrawerShell = ({ open, onClose, title, children }) => {
  return (
    <div className={`${style.overlay} ${open ? style.open : ""}`} onMouseDown={open ? onClose : undefined}>
      <div className={`${style.panel} ${open ? style.open : ""}`} onMouseDown={(e) => e.stopPropagation()}>
        <Header title={title} onClose={onClose}/>
        <div className={style.body}>{children}</div>
      </div>
    </div>
  );
}

export default DrawerShell;