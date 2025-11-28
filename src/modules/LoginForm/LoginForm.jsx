import { useForm } from "react-hook-form";
import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button/Button";

import style from "./LoginForm.module.css";

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
      <div className={style.textFields}>
      <TextField
        register={register}
        rules={{ required: "Username or email required" }}
        name="username"
        placeholder="Username or email"
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
      <Button type="submit">Log in</Button>
    </form>
  );
};

export default LoginForm;
