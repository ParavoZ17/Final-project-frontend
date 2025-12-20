import { useState} from "react";
import {useDispatch} from "react-redux";
import style from "./FollowButton.module.css";
import {followUser, unFollowUser} from "../../../store/user/userOperations";

const FollowButton = ({ author }) => {
  const [isFollowing, setIsFollowing] = useState(author.isFollowedByCurrentUser);

  const dispatch = useDispatch();

  const follow = () => {
    if (isFollowing) {
      dispatch(unFollowUser(author.id));
      setIsFollowing(false);
      return;
    }
    dispatch(followUser(author.id));
    setIsFollowing(true);
  }

  return (
    <button
      onClick={follow}
      className={`${style.followBtn} ${isFollowing ? style.following : ""}`}
      type="button"
    >
      {isFollowing ? "unfollow" : "follow"}
    </button>
  );
}

export default FollowButton;