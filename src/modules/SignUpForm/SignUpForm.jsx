import { useForm } from "react-hook-form";
import { useEffect } from "react";

import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button/Button";
import { Link } from "react-router-dom";
import style from "./SignUpForm.module.css";

const SignUpForm = ({ requestErrors, isSubmitSuccess,onSubmit }) => {
   const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

    useEffect(()=> {
    if(requestErrors) {
        for(const key in requestErrors) {
            setError(key, {
                message: requestErrors[key],
            });
        }
    }
  }, [requestErrors, setError])

  useEffect(()=> {
    if(isSubmitSuccess) {
        reset();
    }
  }, [isSubmitSuccess, reset]);

  const handleFormSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values); 
    }

  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={style.loginForm}>
       <p className={style.formTitle}>
              Sign up to see photos and videos
from your friends.</p>
      <div className={style.textFields}>
          <TextField
        register={register}
        rules={{ required: "Email required" }}
        name="email"
        placeholder="Email"
        type="email"
        error={errors.email}
      />
       <TextField
        register={register}
        rules={{ required: "Full Name required" }}
        name="fullname"
        placeholder="Full Name"
        error={errors.fullname}
  
      />
      <TextField
        register={register}
        rules={{ required: "Username required" }}
        name="username"
        placeholder="Username"
        error={errors.username}
      />
     
      <TextField
        register={register}
        rules={{ required: "Password required" }}
        name="password"
        type="password"
        placeholder="Password"
        error={errors.password}
  
      />
      </div>
      <div className={style.infoTextContainer}>
          <p className={style.infoText}>
              {" "}People who use our service may have uploaded your contact
              information to Instagram.<Link to="/learnmore"> Learn More</Link>
            </p>

            <p className={style.infoText}>
              By signing up, you agree to our <Link to="/terms">Terms</Link>,{" "}
              <Link to="/privacy">Privacy Policy</Link> and
              <Link to="/cookies">Cookies Policy</Link>.
            </p>
        </div>
      <Button type="submit">Sign up</Button>
    </form>
  );
};

export default SignUpForm;
