import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "./EditPost.module.css";
import Button from "../../Button/Button.jsx"; // твоя кнопка
import { timeAgo } from "../../../utils/timeAgo";
import LikeButton from "../../Button/LikeButton.jsx";
import { fetchComments } from "../../../../store/comments/commentsSlice";
import { updatePost } from "../../../../store/posts/postsOperations";
import EmojiPicker from "emoji-picker-react";

const EditPost = ({ post, closeEdit }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  const [text, setText] = useState(post.content || "");
  const [showEmoji, setShowEmoji] = useState(false);
  useEffect(() => {
    if (post?._id) {
      dispatch(fetchComments({ postId: post._id }));
    }
  }, [dispatch, post?._id]);

  const handleSave = async () => {
    await dispatch(updatePost({ id: post.id, payload: { content: text } }));
    closeEdit();
  };
  const handleEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.layout}>
        {/* Ліва частина: фото */}
        <div className={style.imageWrap}>
          <img
            src={post.images}
            alt=""
            className={style.image}
            draggable={false}
          />
        </div>

        {/* Права частина */}
        <div className={style.info}>
          <div className={style.header}>
            <Link
              className={style.authorBox}
              to={`/profile/${post?.author?.username}`}
              onClick={closeEdit}
            >
              <div className={style.avatar}>
                {post?.author?.avatar && (
                  <img src={post.author.avatar} alt="" />
                )}
              </div>
              <div className={style.author}>
                <div className={style.name}>{post.author.username}</div>
              </div>
            </Link>

            <div className={style.editButtons}>
              <Button variant="primary" onClick={handleSave}>
                Save
              </Button>
              <Button variant="secondary" onClick={closeEdit}>
                Cancel
              </Button>
            </div>
          </div>

          <div className={style.editInputWrap}>
            <textarea
              className={style.editInput}
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
            />
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

          <div className={style.comments}>
            {comments.length === 0 && (
              <div className={style.empty}>Пока нет комментариев</div>
            )}
            {comments.map((c) => (
              <div key={c.id || c._id} className={style.comment}>
                <div className={style.commentAvatar}>
                  {c.user?.avatar && <img src={c.user.avatar} alt="" />}
                </div>
                <div>
                  <div className={style.commentText}>
                    <b>{c.user?.username}</b> {c.content}
                  </div>
                  <div className={style.commentTime}>
                    {timeAgo(c.createdAt)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={style.actions}>
            <LikeButton post={post} />
            <div className={style.like}>{post.likesCount} likes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
