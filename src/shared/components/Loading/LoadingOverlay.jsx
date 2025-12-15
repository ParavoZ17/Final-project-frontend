import Loading from "./Loading";
import style from "./LoadingOverlay.module.css";

const LoadingOverlay = ({ open }) => {
  if (!open) return null;

  return (
    <div className={style.overlay}>
      <Loading size={32} center={false} />
    </div>
  );
}

export default LoadingOverlay;