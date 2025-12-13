import { NavLink } from "react-router-dom";
import style from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/profile"}>Profile</NavLink></li>
      <li><NavLink to={"/learnmore"}>Learn more</NavLink></li>
      <li><NavLink to={"/cookies"}>Cookies</NavLink></li>
      <li><NavLink to={"/privacy"}>Privacy Policy</NavLink></li>
      <li><NavLink to={"/terms"}>Terms of Service</NavLink></li>
      </ul>
      <p>© 2025 ICHGRAM</p>
    </footer>
  );
};

export default Footer;
