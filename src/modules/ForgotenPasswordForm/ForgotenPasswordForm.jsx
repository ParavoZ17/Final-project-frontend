import { useForm } from "react-hook-form";
import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button/Button";

import style from "./ForgotenPasswordForm.module.css";

const ForgotenPasswordForm = ({ onSubmit }) => {
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
        rules={{ required: "Email or Username required" }}
        name="username"
        placeholder="Email or Username"
        error={errors.username}
      />
      </div>
      <Button type="submit">Reset your password</Button>
    </form>
  );
};

export default ForgotenPasswordForm;
