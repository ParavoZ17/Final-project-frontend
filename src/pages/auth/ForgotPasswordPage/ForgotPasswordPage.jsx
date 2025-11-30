

import style from "./ForgotPasswordPage.module.css";

import NotFound from "../../../assets/images/reserPasword.png";
import ForgotenPasswordForm from "../../../modules/ForgotenPasswordForm/ForgotenPasswordForm";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const handleResetPassword = (data) => {
    console.log("logging in...", data);
  };

  return (
    <div className={style.forgotPassword_page}>  

      <div className={style.mainBlock}>
        <div className={style.forgotPassword}>
            <div className={style.notFoundFoto}>
         <img src={NotFound} alt="Do you ave problems with login?" width={96}/>
            </div>
            <h3 className={style.titlePage}>Trouble logging in?</h3>
            <p className={style.discription}>Enter your email, phone, or username and we'll
send you a link to get back into your account.</p>
          <ForgotenPasswordForm onSubmit={handleResetPassword} />
          <div className={style.divider}>OR</div>

          <Link to="/signup" className={style.signUp}>Create new account</Link>
        </div>

        <div className={style.login_block}>
          <Link to="/login" className={style.login}>Back to login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
