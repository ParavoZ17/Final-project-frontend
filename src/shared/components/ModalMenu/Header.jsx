import style from "./Header.module.css";

const  Header = ({ title, onClose }) => {
  return (
    <div className={style.header}>
      <span className={style.title}>{title}</span>
      <button className={style.close} onClick={onClose}>✕</button>
    </div>
  );
}

export default Header;