import styles from "./Logo.module.css";
import logoPng from "../../../assets/images/Logo.png"; 

const Logo = ({ type = "auth" }) => {
  return (
    <div className={styles.logo}>
      <img
        src={logoPng}
        alt="Logo"
        className={`${styles.logoImg} ${styles[type]}`}
      />
    </div>
  );
};

export default Logo;
