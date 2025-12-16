import {useRef, useState} from "react";
import style from "./EditProfilePage.module.css";
import {useSelector, useDispatch} from "react-redux";
import {selectUser} from "../../store/auth/authSelector";
import {uploadUserAvatar, updateAuthUserProfile} from "../../store/user/userOperations";
import Loading from "../../shared/components/Loading/Loading";
import {updateAuthUser} from "../../store/auth/authSlice.js";

const ABOUT_MAX = 150;

const EditProfilePage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isUploading, setIsUploading] = useState(false);
  const [form, setForm] = useState({
    username: user.fullname,
    website: user.website,
    about: user.bio,
  });
  const [avatar, setAvatar] = useState(user.avatar);

  const fileRef = useRef(null);

  const aboutCount = form?.about?.length;
  const aboutLeft = ABOUT_MAX - aboutCount;

  const onChange = (key) => (e) => {
    const value = e.target.value;
    setForm((p) => ({
      ...p,
      [key]:
        key === "about" ? value.slice(0, ABOUT_MAX) : value,
    }));
  };

  const onPickPhoto = () => fileRef.current?.click();

  const onFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("avatar", file);

      const {payload} = await dispatch(uploadUserAvatar(formData));
      dispatch(updateAuthUser(payload));
      setAvatar(() => (payload.avatar));

    } catch (err) {
      console.error('err -', err);
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const {payload} = await dispatch(updateAuthUserProfile({
      username: form.username,
      website: form.website,
      bio: form.about,
      avatar,
    }));
    dispatch(updateAuthUser(payload));
  };

  return (
    <div className={style.page}>
      <div className={style.container}>
        <h1 className={style.title}>Edit profile</h1>

        <form className={style.form} onSubmit={onSubmit}>
          {/* top card */}
          <div className={style.card}>
            <div className={style.avatarWrap}>
              {isUploading ? <Loading/> : avatar ? (
                <img className={style.avatar} src={avatar} alt="avatar"/>
              ) : (
                <div className={style.avatarPlaceholder}>
                  {user.fullname?.slice(0, 1)?.toUpperCase() ?? "U"}
                </div>
              )}
            </div>

            <div className={style.cardText}>
              <div className={style.cardName}>{user.displayName}</div>
              <div className={style.cardSubtitle}>
                {user.fullname}
              </div>
            </div>

            <div className={style.cardActions}>
              <button
                type="button"
                className={style.newPhotoBtn}
                onClick={onPickPhoto}
              >
                New photo
              </button>

              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className={style.hiddenInput}
                onChange={onFileChange}
              />
            </div>
          </div>

          {/* Username */}
          <div className={style.field}>
            <label className={style.label} htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className={style.input}
              value={form.username}
              onChange={onChange("username")}
              placeholder="Username"
              autoComplete="off"
            />
          </div>

          {/* Website */}
          <div className={style.field}>
            <label className={style.label} htmlFor="website">
              Website
            </label>
            <input
              id="website"
              className={style.input}
              value={form.website}
              onChange={onChange("website")}
              placeholder="Website"
              autoComplete="off"
            />
          </div>

          {/* About */}
          <div className={style.field}>
            <label className={style.label} htmlFor="about">
              About
            </label>

            <div className={style.textareaWrap}>
              <textarea
                id="about"
                className={style.textarea}
                value={form.about}
                onChange={onChange("about")}
                placeholder="About"
              />
              <div className={style.counter}>
                {aboutLeft} / {ABOUT_MAX}
              </div>
            </div>
          </div>

          <button className={style.saveBtn} type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfilePage;