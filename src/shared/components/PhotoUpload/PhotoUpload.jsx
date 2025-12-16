import { useEffect, useRef } from "react";
import style from "./PhotoUpload.module.css";

export default function PhotoUpload({ files, setFiles, content, setContent }) {
  const inputRef = useRef();

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles ? Array.from(selectedFiles) : []);
  };

  return (
    <div className={style.container}>
      <div className={style.uploadArea}>
        <label className={style.uploadLabel}>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className={style.hiddenInput}
            multiple
            onChange={handleFileChange}
          />
          {!files.length ? (
            <div className={style.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16a4 4 0 01.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
          ) : (
            <img
              src={URL.createObjectURL(files[0])}
              alt="preview"
              className={style.preview}
            />
          )}
        </label>
      </div>

      <div className={style.sidebar}>
        <div className={style.user}>
          <div className={style.avatar}>ICH</div>
          <span className={style.username}>skai_laba</span>
        </div>

        <textarea
          placeholder="Напишіть текст..."
          maxLength={2200}
          className={style.textarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className={style.counter}>{content.length} / 2200</div>
      </div>
    </div>
  );
}
