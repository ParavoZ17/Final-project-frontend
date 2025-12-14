import style from "./Profile.module.css";

const ProfilePage = () => {
  const profile = {
    username: "itcareerhub",
    fullName: "IT Career Hub",
    avatarUrl: "",
    posts: 129,
    followers: "9 993",
    following: 59,
    bioLines: [
      "• Гарантия помощи с трудоустройством в ведущие IT-компании",
      "• Выпускники зарабатывают от 45k евро",
      "БЕСПЛАТНАЯ … more",
    ],
    link: "bit.ly/3rpilbh",
    postsGrid: Array.from({length: 9}).map((_, i) => ({
      id: i + 1,
      img: `https://picsum.photos/seed/profile-${i + 1}/600/600`,
    })),
  };

  return (
    <div className={style.page}>
      <div className={style.container}>
        <header className={style.header}>
          <div className={style.avatarCol}>
            {profile.avatarUrl ? (
              <img className={style.avatar} src={profile.avatarUrl} alt="avatar"/>
            ) : (
              <div className={style.avatarPlaceholder}/>
            )}
          </div>

          <div className={style.infoCol}>
            <div className={style.topRow}>
              <h1 className={style.username}>{profile.username}</h1>
              <button className={style.editBtn} type="button">
                Edit profile
              </button>
            </div>

            <div className={style.stats}>
              <div className={style.stat}>
                <b>{profile.posts}</b> <span>posts</span>
              </div>
              <div className={style.stat}>
                <b>{profile.followers}</b> <span>followers</span>
              </div>
              <div className={style.stat}>
                <b>{profile.following}</b> <span>following</span>
              </div>
            </div>

            <div className={style.bio}>
              <div className={style.fullName}>{profile.fullName}</div>
              {profile.bioLines.map((line, idx) => (
                <div key={idx} className={style.bioLine}>{line}</div>
              ))}
              <a className={style.link} href={`https://${profile.link}`} target="_blank" rel="noreferrer">
                {profile.link}
              </a>
            </div>
          </div>
        </header>

        <div className={style.tabs}>
          <button className={`${style.tab} ${style.activeTab}`} type="button">Posts</button>
          <button className={style.tab} type="button">Reels</button>
          <button className={style.tab} type="button">Tagged</button>
        </div>

        <section className={style.grid}>
          {profile.postsGrid.map((p) => (
            <button key={p.id} className={style.tile} type="button">
              <img className={style.tileImg} src={p.img} alt=""/>
            </button>
          ))}
        </section>
      </div>
    </div>
  )
}

export default ProfilePage;