import style from "./PostCard.module.css";

const PostCard = ({ post }) => {
  return (
    <article className={style.card}>

      <div className={style.header}>
        <div className={style.user}>
          <div className={style.avatar} />
          <span className={style.username}>{post.username}</span>
          <span className={style.dot}>•</span>
          <span className={style.time}>{post.time}</span>
        </div>
        <button className={style.follow}>follow</button>
      </div>


      <div className={style.imageWrap}>
        <img src={post.image} alt="" />
      </div>


      <div className={style.actions}>
        <div className={style.left}>
          <span>♡</span>
          <span>💬</span>
        </div>
      </div>

      <div className={style.content}>
        <div className={style.likes}>{post.likes} likes</div>
        <div className={style.caption}>
          <b>{post.username}</b> {post.caption}
        </div>
        <div className={style.more}>View all comments ({post.comments})</div>
      </div>
    </article>
  );
}

export default PostCard;