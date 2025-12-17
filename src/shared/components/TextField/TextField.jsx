import { useId } from "react";
import styles from "./TextField.module.css";

const TextField = ({
  label,
  register,
  name,
  rules,
  type = "text",
  error,
  ...props
}) => {
  const id = useId();

  const inputProps = register && name
    ? register(name, rules)
    : {};

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        className={styles.field}
        {...inputProps}
        {...props}
      />

      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
};

export default TextField;
