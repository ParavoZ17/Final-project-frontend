import style from "./SignUpPage.module.css";

import Logo from "../../../shared/components/Logo/Logo";
import SignUpForm from "../../../modules/SignUpForm/SignUpForm";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

import {registerUser} from '../../../store/auth/authOperations';
import {selectAuthRequest} from '../../../store/auth/authSelector'


const SignUpPage = () => {
  const { error, loading, isRegisterSuccess } = useSelector(selectAuthRequest);
  const dispatch = useDispatch();
  const handleSignUp = (payload) => {
    dispatch(registerUser (payload));
  };

   if(isRegisterSuccess) return <Navigate to="/login" />;
  return (
    <div className={style.signUp_page}>

      <div className={style.mainBlock}>
        <div className={style.signUpForm}>
          <Logo />
          <SignUpForm onSubmit={handleSignUp} requestErrors={error} isSubmitSuccess={isRegisterSuccess}/>
          {loading && <p>Register request...</p>}
        </div>

        <div className={style.signup_block}>
          Have an account? <Link to="/login" >Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
