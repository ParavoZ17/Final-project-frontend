import ProfileIcon from "../../../assets/svg/Profile";
import style from "./PostCard.module.css";


const PostCard = ({ post, onClick }) => {
  
  return (
    <article className={style.card} onClick={onClick}>
      
      <div className={style.header}>
        <div className={style.user}>
          <ProfileIcon avatarUrl = {post.author.avatar} size = {26}/>
          <span className={style.username}>
            {post.author?.username || "user"}
          </span>
          <span className={style.dot}>•</span>
          <span className={style.time}>
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      {post.images?.length > 0 && (
        <div className={style.imageWrap}>
          <img src={post.images[0]} alt="" />
        </div>
      )}

      {/* actions */}
      <div className={style.actions}>
        <div className={style.left}>
          <span>♡</span>
          <span>💬</span>
        </div>
      </div>

      {/* content */}
      <div className={style.content}>
        <div className={style.likes}>
          {post.likesCount} likes
        </div>

        <div className={style.caption}>
          <b>{post.author?.username || "user"}</b>{" "}
          {post.content}
        </div>

        <div className={style.more}>
          View all comments ({post.commentsCount})
        </div>
      </div>
    </article>
  );
};

export default PostCard;
