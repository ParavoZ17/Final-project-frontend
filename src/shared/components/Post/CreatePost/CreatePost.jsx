import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../../../store/posts/postsOperations";
import PhotoUpload from "../../PhotoUpload/PhotoUpload";
import style from "./CreatePost.module.css";


const CreatePost = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWasSubmitted(true);

    if (!files.length || !content.trim()) {
      return;
    }

    const formData = new FormData();
    formData.append("content", content);
    Array.from(files).forEach((file) => formData.append("images", file));

    try {
      await dispatch(createPost(formData)).unwrap();
      setContent("");
      setFiles([]);
      setWasSubmitted(false);

      if (closeModal) closeModal();
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
  <div className={style.header}>
    <h2>Create new post</h2>
    <button type="submit">Share</button>
  </div>

  <div className={style.CreatePostForm}>
    <PhotoUpload
      files={files}
      setFiles={setFiles}
      content={content}
      setContent={setContent}
      wasSubmitted={wasSubmitted}
    />

    <div className={style.emojiWrap}>
      <button
        type="button"
        className={style.emojiBtn}
        onClick={() => setShowEmoji((prev) => !prev)}
      >
        😊
      </button>

      {showEmoji && (
        <div className={style.emojiPicker}>
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  </div>
</form>
  );
};

export default CreatePost;
