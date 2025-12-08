import Button from "../../shared/components/Button/Button";

import { useNavigate } from "react-router-dom";

import style from "./InformationModul.module.css";

import HomeIcon from "../../assets/svg/Home";
import CreatePostIcon from "../../assets/svg/CreatePost";
import MessengerIcon from "../../assets/svg/Messemger";
import NotificationIcon from "../../assets/svg/Notifications";
import SearchIcon from "../../assets/svg/Search";

const InformationModul = ({ type }) => {
    const navigate = useNavigate();

      const goToPage = (link) => {
    navigate(`/${link}`); 
  };

  const info = {
    terms: {
      title: "Terms",
      text: "By using our service, you agree to comply with these Terms and all applicable community guidelines. You must provide accurate, complete, and up-to-date information when creating an account, and you are responsible for keeping your login credentials secure. Any activity performed through your account is considered your responsibility. You may not use the service for illegal activities, harassment, or actions that may harm others. We reserve the right to modify or update the service at any time without prior notice, and any unauthorized access attempts, data scraping, or interference with platform operations are strictly prohibited. We may suspend or terminate your account if you violate these Terms or misuse the platform. Your continued use of the service after updates means you accept the revised terms. If you do not agree with any part of the Terms, you should stop using the service immediately.",
    },
    privacy: {
      title: "Privacy Policy",
      text: "We collect basic account information and usage data to operate and improve our service. Your personal data is stored securely and processed in accordance with standard privacy practices, and we do not sell or rent your information to third parties. Some data may be shared with trusted service providers who help run the platform. You have the right to request access to your personal data at any time, as well as request correction or deletion of information that is inaccurate or no longer needed. We store your data only for as long as necessary to provide the service and take reasonable measures to protect it from unauthorized access. You can contact us with any privacy-related concerns or questions. By using our service, you consent to the collection and processing of your data as described in this Privacy Policy.",
    },
    cookies: {
      title: "Cookies Policy",
      text: "Our website uses cookies to enhance your browsing experience and provide essential functionality. Cookies help remember your preferences, such as language or login details, and we use both session and persistent cookies to improve performance. Some cookies allow us to analyze how users interact with the platform, which helps us improve content, features, and overall quality. Certain cookies are necessary for the website to function properly and cannot be disabled. Optional cookies can be turned off in your browser settings, although doing so may affect some features. We do not use cookies to collect sensitive personal information. By continuing to use our website, you agree to the use of cookies as described in this policy.",
    },
    learnMore: {
      title: "Learn More",
      text: "“Other people who use our service may have uploaded or synced their contact information to our platform, which could include your phone number or email address. We use this data to help identify whether you already have connections using our services. This allows us to suggest friends, improve recommendations, and enhance social features on the platform. If your information was uploaded by another user, it is processed according to our privacy practices. You can choose to manage how your contact information is used by adjusting your privacy settings. We do not sell or publicly display these details. Your contact data is only used to improve the experience for you and others. If you prefer that your information is not stored, you may request its removal at any time. We regularly review how contact information is handled to ensure transparency and security. Our goal is to help users connect safely while respecting your privacy.”",
    },
  };
  return (
    <div className={style.infoBlock}>
      <div className={style.textBlock}>
        <h1>{info[type].title}</h1>
        <p>{info[type].text}</p>
      </div>
      <div className={style.btnGroup}>      <Button onClick={()=>{goToPage("main")}}>Home</Button>
      <Button onClick={()=>{goToPage("signup")}}>Sign up</Button>
       </div>
       <HomeIcon/><CreatePostIcon/><MessengerIcon/><NotificationIcon/><SearchIcon/>
    </div>
  );
};

export default InformationModul;
