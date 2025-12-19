import { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "../TextField/TextField";
import CommentItem from "./CommentItem";
import { addComment } from "../../../store/comments/commentsOperations";
import style from "./Comments.module.css";

const Comments = ({ postId, comments = [], canAdd = false }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    await dispatch(addComment({ postId, text }));
    setText("");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.list}>
        {comments.length === 0 && <div className={style.empty}>Пока нет комментариев</div>}
        {comments.map((c) => (
          <CommentItem key={c._id || c.id} comment={c} />
        ))}
      </div>

      {canAdd && (
        <form className={style.form} onSubmit={handleSubmit}>
          <TextField
            as="textarea"
            placeholder="Add a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" disabled={!text.trim()}>
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Comments;
