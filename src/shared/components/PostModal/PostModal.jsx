import { useEffect } from "react";
import style from "./PostModal.module.css";

const PostModal = ({ modal, onClose }) => {
  const isOpen = Boolean(modal);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!modal) return null;

  return (
    <div className={style.overlay} onMouseDown={onClose}>
      <div
        className={style.modal}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {modal.type === "create" && <modal.component {...modal.payload} />}
      </div>
    </div>
  );
};

export default PostModal;
