import {useOutletContext} from "react-router-dom";
import style from "./PostCard.module.css";
import {CommentsIcon, LikeIcon} from "../../../assets/svg/index.js"
import ViewPost from "./ViewPost/ViewPost.jsx";

const PostCard = ({ post }) => {
  const {openModal} = useOutletContext();

  return (
    <div className={style.card} onClick={() => openModal("create", ViewPost, {post})}>
      <img
        src={post.images}
        alt=""
        className={style.image}
        loading="lazy"
      />
      <div className={style.overlay}>
        <div className={style.stats}>
          <div className={style.stat}>
            <LikeIcon color={'white'} active={true}/> <span>{post.likesCount}</span>
          </div>
          <div className={style.stat}>
            <span><CommentsIcon fill={'white'}/></span><span>{post.commentsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;