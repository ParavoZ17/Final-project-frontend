import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "./ViewPost.module.css";
import PostOptionsMenu from "./PostOptionsMenu";
import EditPost from "../EditPost/EditPost";
import { selectUser } from "../../../../store/auth/authSelector";
import FollowButton from "../../Button/FollowButton.jsx";
import { timeAgo } from "../../../utils/timeAgo";
import LikeButton from "../../Button/LikeButton.jsx";
import {
  fetchComments,
  addNewComment,
} from "../../../../store/comments/commentsSlice";
import { deletePost } from "../../../../store/posts/postsOperations";

const ViewPost = ({ postId, closeModal }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.find((p) => p.id === postId || p._id === postId);
  const authUser = useSelector(selectUser);
  const comments = useSelector((state) => state.comments.comments);

  const [menuOpen, setMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (postId) {
      dispatch(fetchComments({ postId }));
    }
  }, [dispatch, postId]);

  if (!post) return null;

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    await dispatch(addNewComment({ postId, content: text.trim() }));
    setText("");
  };

  const handleDelete = async (id) => {
    if (!id) return;
    await dispatch(deletePost(id));
    closeModal();
  };

  const handleEdit = () => {
    setMenuOpen(false);
    setIsEditing(true);
  };

  if (isEditing) {
    return <EditPost post={post} closeEdit={() => setIsEditing(false)} />;
  }

  return (
    <div className={style.wrapper}>
      <div className={style.layout}>
        <div className={style.imageWrap}>
          <img
            src={post.images[0]}
            alt=""
            className={style.image}
            draggable={false}
          />
        </div>

        <div className={style.info}>
          <div className={style.header}>
            <Link
              className={style.authorBox}
              to={`/profile/${post?.author?.username}`}
              onClick={closeModal}
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

            {authUser?.username === post?.author?.username ? (
              <button className={style.more} onClick={() => setMenuOpen(true)}>
                ⋯
              </button>
            ) : (
              <FollowButton author={post.author || {}} />
            )}
          </div>

          {post.content && <div className={style.caption}>{post.content}</div>}

          <div className={style.comments}>
            {" "}
            {comments.length === 0 && (
              <div className={style.empty}>Пока нет комментариев</div>
            )}{" "}
            {comments.map((c) => (
              <div key={c._id || c.id} className={style.comment}>
                {" "}
                <div className={style.commentAvatar}>
                  {" "}
                  {c.user?.avatar && <img src={c.user.avatar} alt="" />}{" "}
                </div>{" "}
                <div className={style.commentTextblock}>
                  {" "}
                  <div className={style.commentText}>
                    {" "}
                    <div className={style.commentUserName}>
                      {c.user?.username}
                    </div>{" "}
                    <div>{c.content}</div>{" "}
                  </div>{" "}
                  <div className={style.commentTime}>
                    {timeAgo(c.createdAt)}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>

          <div className={style.actions}>
            <div className={style.like}>
              <LikeButton post={post} />
              <div className={style.liketext}>{post.likesCount} likes</div>
            </div>

            <form className={style.form} onSubmit={handleAddComment}>
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a comment…"
              />
              <button type="submit" disabled={!text.trim()}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <PostOptionsMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onDelete={() => handleDelete(post._id || post.id)}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default ViewPost;
