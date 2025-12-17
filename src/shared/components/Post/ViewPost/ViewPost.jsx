import {useMemo, useState} from "react";
import {useSelector} from "react-redux";
import styles from "./ViewPost.module.css";
import {LikeIcon} from "../../../../assets/svg"
import PostOptionsMenu from "./PostOptionsMenu";
import {selectUser} from "../../../../store/auth/authSelector";

function timeAgo(iso) {
  const d = new Date(iso).getTime();
  const now = Date.now();
  const s = Math.max(1, Math.floor((now - d) / 1000));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}

const ViewPost = ({post}) => {
  const authUser = useSelector(selectUser);
  const [menuOpen, setMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const created = useMemo(() => timeAgo(post.createdAt), [post.createdAt]);

  const onToggleLike = () => {
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <div className={styles.imageWrap}>
          <img
            src={post.images}
            alt=""
            className={styles.image}
            draggable={false}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.header}>
            <div className={styles.avatar}>
              {post?.author?.avatar && (
                <img src={post?.author?.avatar} alt=""/>
              )}
            </div>

            <div className={styles.author}>
              <div className={styles.name}>{post?.author?.name}</div>
              <div className={styles.meta}>
                {post?.author?.username
                  ? post?.author?.username
                  : created}
              </div>
            </div>
            {
              authUser?.username === post?.author?.username &&
              <button
                className={styles.more}
                onClick={() => setMenuOpen(true)}
                aria-label="Post options"
              >
                ⋯
              </button>
            }
          </div>

          {post?.caption && (
            <div className={styles.caption}>{post.caption}</div>
          )}

          <div className={styles.comments}>
            {post === 0 && (
              <div className={styles.empty}>Пока нет комментариев</div>
            )}

            {post?.comments?.map((c) => (
              <div key={c.id} className={styles.comment}>
                <div className={styles.commentAvatar}>
                  {c.user.avatarUrl && (
                    <img src={c.user.avatarUrl} alt=""/>
                  )}
                </div>
                <div>
                  <div className={styles.commentText}>
                    <b>{c.user.name}</b> {c.text}
                  </div>
                  <div className={styles.commentTime}>
                    {timeAgo(c.createdAt)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <LikeIcon
              onClick={() => onToggleLike()}
              active={post.isLiked}/>
            <div className={styles.like}>{post.likesCount} likes</div>
            <div className={styles.time}>{created}</div>
            <form
              className={styles.form}
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