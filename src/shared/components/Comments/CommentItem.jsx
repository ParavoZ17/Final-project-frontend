import { timeAgo } from "../../utils/timeAgo";
import style from "./CommentItem.module.css";

const CommentItem = ({ comment }) => {
  return (
    <div className={style.comment}>
      <div className={style.avatar}>
        {comment.user?.avatarUrl && <img src={comment.user.avatarUrl} alt="" />}
      </div>
      <div className={style.content}>
        <div className={style.text}>
          <b>{comment.user?.name}</b> {comment.text}
        </div>
        <div className={style.time}>{timeAgo(comment.createdAt)}</div>
      </div>
    </div>
  );
};

export default CommentItem;
