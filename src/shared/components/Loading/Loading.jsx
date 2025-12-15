import style from "./Loading.module.css";

const Loading = ({ size = 28, center = true, label = "Loading" }) => {
  return (
    <div className={center ? style.center : style.inline} aria-label={label} role="status">
      <span
        className={style.spinner}
        style={{ width: size, height: size }}
      />
    </div>
  );
}

export default Loading;