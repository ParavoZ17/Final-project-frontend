import style from "./LoginPage.module.css";

import backgroundFoto from "../../../assets/images/LogoBackground.png";
import Logo from "../../../shared/components/Logo/Logo";
import LoginForm from "../../../modules/LoginForm/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleLogin = (data) => {
    console.log("logging in...", data);
  };

  return (
    <div className={style.login_page}>
      <div className={style.bg_img}>
        <img src={backgroundFoto} alt="foto - example instagram app" />
      </div>

      <div className={style.right_side}>
        <div className={style.login}>
          <Logo />

          <LoginForm onSubmit={handleLogin} />
          <div className={style.divider}>OR</div>

          <Link to="/forgot-password" className={style.forgot_password}>Forgot password?</Link>
        </div>

        <div className={style.signup_block}>
          Don’t have an account? <Link to="/signup" className={style.signup_link}>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
