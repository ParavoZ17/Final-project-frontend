import style from "./ProfileNotAvailable.module.css";
import {useNavigate} from "react-router-dom";

const ProfileNotAvailable = ({
                               title = "Profile isn't available",
                               text = "The link may be broken, or the profile may have been removed.",
                               buttonText = "Home",
                             }) => {
  const navigate = useNavigate();
  return (
    <div className={style.wrap}>
      <div className={style.box}>
        <div className={style.iconCircle} aria-hidden="true">
          <span className={style.icon}>!</span>
        </div>

        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{text}</p>

        <button className={style.button} type="button" onClick={() => navigate("/")}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ProfileNotAvailable;