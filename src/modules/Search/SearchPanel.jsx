import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../shared/components/TextField/TextField";
import styles from "./SearchPanel.module.css";

const SearchPanel = ({ recent = [] }) => {
  const [value, setValue] = useState("");
   const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();


  return (
    <div className={styles.container}>
   

      <div className={styles.inputWrapper}>
        <TextField
          name="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
        />

        {value && (
          <button
            className={styles.clear}
            onClick={() => setValue("")}
            type="button"
          >
            ×
          </button>
        )}
      </div>

      <p className={styles.subtitle}>Recent</p>

      <ul className={styles.list}>
        {recent.map((item) => (
          <li key={item.id} className={styles.item}>
            <img src={item.avatar} alt={item.name} />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPanel;
