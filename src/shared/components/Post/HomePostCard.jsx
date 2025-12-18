import {useOutletContext, Link} from "react-router-dom";
import ProfileIcon from "../../../assets/svg/Profile";
import style from "./HomePostCard.module.css";
import {CommentsIcon} from "../../../assets/svg"
import ViewPost  from "./ViewPost/ViewPost";
import {timeAgo} from "../../utils/timeAgo";
import LikeButton from "../Button/LikeButton.jsx";

const HomePostCard = ({post}) => {
  const {openModal} = useOutletContext();

  return (
    <article className={style.card}>

      <div className={style.header}>
        <div className={style.user}>
          <Link
            className={style.authorBox}
            to={`/profile/${post?.author?.username}`}>
            <ProfileIcon avatarUrl={post?.author?.avatar} size={26}/>
            <span className={style.username}>
            {post.author?.username || "user"}
          </span>
          </Link>
          <span className={style.dot}>•</span>
          <span className={style.time}>
            {timeAgo(post.createdAt)}
          </span>
        </div>
      </div>

      {post.images?.length > 0 && (
        <div className={style.imageWrap}>
          <img src={post.images[0]} alt=""/>
        </div>
      )}

      <div className={style.actions}>
        <div className={style.left}>
          <span><LikeButton post={post}/></span>
          <span onClick={() => openModal("create", ViewPost, {postId: post.id})}>
            <CommentsIcon stroke='black'/>
          </span>
        </div>
      </div>

      <div className={style.content}>
        <div className={style.likes}>
          {post.likesCount} likes
        </div>

        <div className={style.caption}>
          <b>{post.author?.username || "user"}</b>{" "}
          {post.content}
        </div>

        <div className={style.more} onClick={() => openModal("create", ViewPost, {post})}>
          View all comments ({post.commentsCount})
        </div>
      </div>
    </article>
  );
};

export default HomePostCard;