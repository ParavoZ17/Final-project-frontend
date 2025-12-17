import LoadingOverlay from "../../shared/components/Loading/LoadingOverlay";
import { useState, useEffect } from "react";
import TextField from "../../shared/components/TextField/TextField";
import { searchUsers } from "../../shared/api/user-api";
import styles from "./SearchPanel.module.css";

const SearchPanel = ({ recent = [] }) => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!value.trim()) {
      setResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        setIsLoading(true);
        const users = await searchUsers(value);
        setResults(users);
      } catch (error) {
        console.error("Search users error:", error);
      } finally {
        setIsLoading(false);
      }
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [value]);

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
            type="button"
            className={styles.clear}
            onClick={() => setValue("")}
          >
            ×
          </button>
        )}
      </div>

      {isLoading && <LoadingOverlay />}

      {value && (
        <ul className={styles.list}>
          {!isLoading && results.length === 0 && (
            <li className={styles.empty}>No users found</li>
          )}
          {results.map((user) => (
            <li key={user.id} className={styles.item}>
              <img src={user.avatar} alt={user.username} />
              <span>{user.username}</span>
            </li>
          ))}
        </ul>
      )}

      
      {recent.length > 0 && (
        <>
          <p className={styles.subtitle}>Recent</p>
          <ul className={styles.list}>
            {recent.map((item) => (
              <li key={item.id} className={styles.item}>
                <img src={item.avatar} alt={item.name} />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SearchPanel;
