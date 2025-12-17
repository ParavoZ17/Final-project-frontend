import style from "./Header.module.css";

const  Header = ({ title}) => {
  return (
    <div className={style.header}>
      <span className={style.title}>{title}</span>
    </div>
  );
}

export default Header;