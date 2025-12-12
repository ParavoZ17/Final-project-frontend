import backgroundFoto from "../../assets/images/LogoBackground.png"
import style from "./NotFoundPage.module.css"

const NotFoundPage = () =>{
return <div className={style.container}>
        <div className={style.bg_img}>
        <img src={backgroundFoto} alt="foto - example instagram app" />
      </div>
      <div className={style.text_container}><h1>Oops! Page Not Found (404 Error)</h1><p>We're sorry, but the page you're looking for doesn't seem to exist.
If you typed the URL manually, please double-check the spelling.
If you clicked on a link, it may be outdated or broken.</p></div>
</div>
}

export default NotFoundPage;