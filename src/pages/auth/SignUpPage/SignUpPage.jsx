import style from "./SignUpPage.module.css";

import Logo from "../../../shared/components/Logo/Logo";
import SignUpForm from "../../../modules/SignUpForm/SignUpForm";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const handleSignUp = (data) => {
    console.log("logging in...", data);
  };

  return (
    <div className={style.signUp_page}>

      <div className={style.mainBlock}>
        <div className={style.signUpForm}>
          <Logo />
          <SignUpForm onSubmit={handleSignUp} />
        </div>

        <div className={style.signup_block}>
          Have an account? <Link to="/login" >Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
