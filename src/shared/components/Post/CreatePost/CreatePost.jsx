import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../../../store/posts/postsSlice";
import PhotoUpload from "../../PhotoUpload/PhotoUpload";
import style from "./CreatePost.module.css";

const CreatePost = ({ onClose }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content && files.length === 0) return;

    const formData = new FormData();
    formData.append("content", content);
    Array.from(files).forEach((file) => formData.append("images", file));

    await dispatch(createPost(formData));

    setContent("");
    setFiles([]);
    if (onClose) onClose(); // закриваємо модалку
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <div className={style.header}>
        <h2>Create new post</h2>
        <button type="submit">Share</button>
      </div>
      <div className={style.CreatePostForm}>
        <PhotoUpload files={files} setFiles={setFiles} content={content} setContent={setContent}/>
      </div>
    </form>
  );
};

export default CreatePost;
