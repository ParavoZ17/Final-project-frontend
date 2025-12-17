import {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import style from "./ViewPost.module.css";
import {LikeIcon} from "../../../../assets/svg"
import PostOptionsMenu from "./PostOptionsMenu";
import {selectUser} from "../../../../store/auth/authSelector";
import FollowButton from "../../Button/FollowButton.jsx";
import {timeAgo} from "../../../utils/timeAgo";

const ViewPost = ({post, closeModal}) => {
  const authUser = useSelector(selectUser);
  const [menuOpen, setMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const onToggleLike = () => {
  }

  return (
    <div className={style.wrapper}>
      <div className={style.layout}>
        <div className={style.imageWrap}>
          <img
            src={post.images}
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
              onClick={() => closeModal()}
            >
              <div
                className={style.avatar}>
                {post?.author?.avatar && (
                  <img src={post?.author?.avatar} alt=""/>
                )}
              </div>
              <div className={style.author}>
                <div className={style.name}>{post?.author?.username}</div>
              </div>
            </Link>
            {
              authUser?.username === post?.author?.username ?
                <button
                  className={style.more}
                  onClick={() => setMenuOpen(true)}
                  aria-label="Post options"
                >
                  ⋯
                </button> :
                <FollowButton author={post?.author || {}}/>
            }
          </div>

          {post?.caption && (
            <div className={style.caption}>{post.caption}</div>
          )}

          <div className={style.comments}>
            {post === 0 && (
              <div className={style.empty}>Пока нет комментариев</div>
            )}

            {post?.comments?.map((c) => (
              <div key={c.id} className={style.comment}>
                <div className={style.commentAvatar}>
                  {c.user.avatarUrl && (
                    <img src={c.user.avatarUrl} alt=""/>
                  )}
                </div>
                <div>
                  <div className={style.commentText}>
                    <b>{c.user.name}</b> {c.text}
                  </div>
                  <div className={style.commentTime}>
                    {timeAgo(c.createdAt)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={style.actions}>
            <LikeIcon
              onClick={() => onToggleLike()}
              active={post.isLiked}/>
            <div className={style.like}>{post.likesCount} likes</div>
            <div className={style.time}>{timeAgo(post.createdAt)}</div>
            <form
              className={style.form}
              onSubmit={(e) => {
                e.preventDefault();
                if (!text.trim()) return;
                // onAddComment?.(post.id, text.trim());
                setText("");
              }}
            >
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
        onDelete={() => console.log("delete")}
        onEdit={() => console.log("edit")}
        onGoToPost={() => console.log("go")}
        onCopyLink={() => console.log("copy")}
      />
    </div>
  );
}

export default ViewPost;