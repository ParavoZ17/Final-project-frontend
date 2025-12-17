import { useState } from "react";
import TextField from "../../shared/components/TextField/TextField";
import styles from "./SearchPanel.module.css";

const SearchPanel = ({ recent = [] }) => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Search</h2>

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
