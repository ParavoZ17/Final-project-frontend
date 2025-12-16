import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import style from "./Profile.module.css";
import ProfileNotAvailable from "./ProfileNotAvailable.jsx";
import {getUserByUsername} from "../../store/user/userOperations";
import {selectUser} from "../../store/auth/authSelector";
import LoadingOverlay from "../../shared/components/Loading/LoadingOverlay";

const ProfilePage = () => {
  const basicProfile = {
    id: '693c29793e6506aa0e383718',
    username: 'bob',
    fullname: 'Bob',
    bio: '',
    avatar: '',
    website: '',
    postsCount: 0,
    followersCount: 0,
    followingCount: 0,
    posts: Array.from({length: 9}).map((_, i) => ({
      id: i + 1,
      img: `https://picsum.photos/seed/profile-${i + 1}/600/600`,
    }))
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(basicProfile);
  const [isMe, setIsMe] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {username} = useParams();
  const authUser = useSelector(selectUser);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const {payload: user} = await dispatch(getUserByUsername(username));
      user.login = username;
      setIsMe(user?.id === authUser?.id);
      setProfile(user);
      setIsLoading(false);
    };

    fetchUser();
  }, [authUser?.id, dispatch, username]);

  return (
    <div className={style.page}>
      <div className={style.container}>
        <LoadingOverlay open={isLoading}/>
        {
          profile.email === 'User not found' ?  <ProfileNotAvailable/> :  <>
            <header className={style.header}>
              <div className={style.avatarCol}>
                {profile.avatar ? (
                  <img className={style.avatar} src={profile.avatar} alt="avatar"/>
                ) : (
                  <div className={style.avatarPlaceholder}/>
                )}
              </div>

              <div className={style.infoCol}>
                <div className={style.topRow}>
                  <h1 className={style.username}>{profile.username}</h1>
                  {isMe ? <button
                      className={style.editBtn}
                      type="button"
                      onClick={() => navigate(`/profile/edit`)}
                    >Edit profile</button> :
                    <>
                      <button className={style.followBtn} type="button">Follow</button>
                      <button className={style.messageBtn} type="button">Message</button>
                    </>
                  }
                </div>

                <div className={style.stats}>
                  <div className={style.stat}>
                    <b>{profile.postsCount ?? 0}</b> <span>posts</span>
                  </div>
                  <div className={style.stat}>
                    <b>{profile.followersCount ?? 0}</b> <span>followers</span>
                  </div>
                  <div className={style.stat}>
                    <b>{profile.followingCount ?? 0}</b> <span>following</span>
                  </div>
                </div>

                <div className={style.bio}>
                  <div className={style.fullName}>{profile.fullname}</div>
                  <div className={style.bioLine}>{profile.bio}</div>
                  <a className={style.link} href={`https://${profile.website}`} target="_blank" rel="noreferrer">
                    {profile.website}
                  </a>
                </div>
              </div>
            </header>
            <section className={style.grid}>
              {basicProfile?.posts?.map((p) => (
                <button key={p.id} className={style.tile} type="button">
                  <img className={style.tileImg} src={p.img} alt=""/>
                </button>
              ))}
            </section>
          </>
        }

      </div>
    </div>
  )
}

export default ProfilePage;