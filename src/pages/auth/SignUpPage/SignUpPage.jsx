import style from "./SignUpPage.module.css";
import Logo from "../../../shared/components/Logo/Logo";
import SignUpForm from "../../../modules/SignUpForm/SignUpForm";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { registerUser } from '../../../store/auth/authOperations';
import { toastSuccess } from "../../../shared/utils/toast";
import { resetRegisterSuccess } from "../../../store/auth/authSlice";
import {
  selectAuthLoading,
  selectIsRegisterSuccess,
} from "../../../store/auth/authSelector";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectAuthLoading);
  const isRegisterSuccess = useSelector(selectIsRegisterSuccess);

  const handleSignUp = (payload) => {
    dispatch(registerUser(payload));
  };

  useEffect(() => {
    if (isRegisterSuccess) {
      toastSuccess("Реєстрація успішна 🎉");

      setTimeout(() => {
        dispatch(resetRegisterSuccess());
      }, 0);
    }
  }, [isRegisterSuccess, dispatch]);

  if (isRegisterSuccess) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={style.signUp_page}>
      <div className={style.mainBlock}>
        <div className={style.signUpForm}>
          <Logo />
          <SignUpForm
            onSubmit={handleSignUp}
            isSubmitSuccess={isRegisterSuccess}
          />
          {loading && <p>Register request...</p>}
        </div>

        <div className={style.signup_block}>
          Have an account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
