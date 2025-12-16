import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import style from "./Profile.module.css";
import ProfileNotAvailable from "./ProfileNotAvailable.jsx";
import { getUserByUsername } from "../../store/user/userOperations";
import { selectUser } from "../../store/auth/authSelector";
import LoadingOverlay from "../../shared/components/Loading/LoadingOverlay";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();

  const authUser = useSelector(selectUser);
  const { profile, isLoading, error } = useSelector(
    (state) => state.user // ⬅️ якщо у тебе userReducer
  );

  const isMe = authUser?.username === username;

  useEffect(() => {
    dispatch(getUserByUsername(username));
  }, [dispatch, username]);

  if (isLoading) {
    return <LoadingOverlay open />;
  }

  if (error || !profile) {
    return <ProfileNotAvailable />;
  }

  return (
    <div className={style.page}>
      <div className={style.container}>
        <header className={style.header}>
          <div className={style.avatarCol}>
            {profile.avatar ? (
              <img
                className={style.avatar}
                src={profile.avatar}
                alt="avatar"
              />
            ) : (
              <div className={style.avatarPlaceholder} />
            )}
          </div>

          <div className={style.infoCol}>
            <div className={style.topRow}>
              <h1 className={style.username}>{profile.username}</h1>

              {isMe ? (
                <button
                  className={style.editBtn}
                  type="button"
                  onClick={() => navigate("/profile/edit")}
                >
                  Edit profile
                </button>
              ) : (
                <>
                  <button className={style.followBtn} type="button">
                    Follow
                  </button>
                  <button className={style.messageBtn} type="button">
                    Message
                  </button>
                </>
              )}
            </div>

            <div className={style.stats}>
              <div className={style.stat}>
                <b>{profile.postsCount}</b> <span>posts</span>
              </div>
              <div className={style.stat}>
                <b>{profile.followersCount}</b> <span>followers</span>
              </div>
              <div className={style.stat}>
                <b>{profile.followingCount}</b> <span>following</span>
              </div>
            </div>

            <div className={style.bio}>
              <div className={style.fullName}>{profile.fullname}</div>
              {profile.bio && (
                <div className={style.bioLine}>{profile.bio}</div>
              )}
              {profile.website && (
                <a
                  className={style.link}
                  href={`https://${profile.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.website}
                </a>
              )}
            </div>
          </div>
        </header>

        <ul className={style.grid}>
          {profile.posts?.map((post) => (
            <li key={post._id} className={style.tile}>
              {post.images?.[0] && (
                <img
                  className={style.tileImg}
                  src={post.images[0]}
                  alt=""
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
