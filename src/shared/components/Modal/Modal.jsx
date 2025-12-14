import {useEffect} from "react";
import style from "./Modal.module.css";
import Header from "./Header";

const Modal = ({open, onClose, title, children}) => {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <div
      className={`${style.overlay} ${open ? style.open : ""}`}
      onMouseDown={open ? onClose : undefined}
    >
      <div
        className={`${style.panel} ${open ? style.open : ""}`}
        onMouseDown={(e) => e.stopPropagation()}
        aria-hidden={!open}
      >
        <Header title={title} onClose={onClose}/>
        <div className={style.body}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
