import {useEffect} from "react";
import styles from "./PostOptionsMenu.module.css";

const PostOptionsMenu = ({
                           open,
                           onClose,
                           onDelete,
                           onEdit,
                           postId
                         }) => {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    onClose();
  }

  return (
    <div className={styles.overlay} onMouseDown={onClose}>
      <div
        className={styles.card}
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className={`${styles.item} ${styles.danger}`} onClick={onDelete}>
          Delete
        </button>
        <button className={styles.item} onClick={() => onEdit(postId)} >
          Edit
        </button>
        <button className={styles.item} onClick={onClose}>
          Go to post
        </button>
        <button className={styles.item} onClick={copyLink}>
          Copy link
        </button>
        <button className={styles.item} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default PostOptionsMenu;