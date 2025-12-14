import { Link } from "react-router-dom";
import style from "./ExploreCard.module.css";

const ExploreCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className={style.card}>
      <img
        src={post.image}
        alt=""
        className={style.image}
        loading="lazy"
      />
      <div className={style.overlay}>
        <div className={style.stats}>
          <div className={style.stat}>
            ❤️ <span>{post.likes}</span>
          </div>
          <div className={style.stat}>
            💬 <span>{post.comments}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ExploreCard;