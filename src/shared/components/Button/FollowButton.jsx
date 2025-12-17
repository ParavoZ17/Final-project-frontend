import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import style from "./FollowButton.module.css";
import {getIsFollowingUser, followUser, unFollowUser} from "../../../store/user/userOperations";

const FollowButton = ({author}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      const {payload} = await dispatch(getIsFollowingUser(author.id));
      setIsFollowing(payload?.isFollowing);
    }

    fetch();
  }, [dispatch, author.id]);

  const follow = () => {
    if (isFollowing) {
      dispatch(unFollowUser(author.id));
      setIsFollowing(false);
      return;
    }
    dispatch(followUser(author.id));
    setIsFollowing(true);
  }

  return <button
    onClick={follow}
    className={`${style.followBtn} ${isFollowing ? style.following : ""}`}
    type="button">
    {isFollowing ? "Unfollow" : "Follow"}
  </button>
}

export default FollowButton;