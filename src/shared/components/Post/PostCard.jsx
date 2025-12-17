import { Link } from "react-router-dom";
import style from "./PostCard.module.css";
import {NotificationsIcon} from "../../../assets/svg/index.js"

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className={style.card}>
      <img
        src={post.images}
        alt=""
        className={style.image}
        loading="lazy"
      />
      <div className={style.overlay}>
        <div className={style.stats}>
          <div className={style.stat}>
            <NotificationsIcon/> <span>{post.likesCount}</span>
          </div>
          <div className={style.stat}>
            💬 <span>{post.commentsCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;