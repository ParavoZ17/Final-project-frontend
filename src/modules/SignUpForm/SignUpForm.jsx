import { useForm } from "react-hook-form";
import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button/Button";
import { Link } from "react-router-dom";
import style from "./SignUpForm.module.css";

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const handleFormSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values); 
    }
    reset();
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
        name="name"
        placeholder="Full Name"
        error={errors.name}
  
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
              <Link to="/privacy">Privacy Policy</Link> and{" "}
              <Link to="/cookies">Cookies Policy</Link>.
            </p>
        </div>
      <Button type="submit">Sign up</Button>
    </form>
  );
};

export default LoginForm;
