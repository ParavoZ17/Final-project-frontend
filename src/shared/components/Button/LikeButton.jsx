import {useDispatch} from "react-redux";
import {toggleLike} from "../../../store/posts/postsOperations";
import {LikeIcon} from "../../../assets/svg/index.js";
import style from "./LikeButton.module.css";
import {updatePostLike} from "../../../store/posts/postsSlice";

const LikeButton = ({post}) => {
  const dispatch = useDispatch();

  const like = () => {
    async function fetch() {
      const {payload} = await dispatch(toggleLike(post?.id));
      dispatch(updatePostLike({post, likesResponse: payload}));
    }

    fetch();
  }

  return <span className={style.like} onClick={like}>
     <LikeIcon active={post?.userLiked}/>
  </span>
}

export default LikeButton;