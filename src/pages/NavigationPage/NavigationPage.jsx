import { Route, Routes } from "react-router-dom"
import CookiesPolicyPage from "../CookiesPolicyPage/CookiesPolicyPage";
import ExplorePage from "../ExplorePage/ExplorePage";
import ForgotPasswordPage from "../ForgotPasswordPage/ForgotPasswordPage";
import HomePage from "../HomePage/HomePage";
import LearnMorePage from "../LearnMorePage/LearnMorePage";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage"
import MessagesPage from "../MessagesPage/MessagesPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import NotificationPage from "../NotificationPage/NotificationPage";
import SearchPage from "../SearchPage/SearchPage";
import PrivatcyPolicyPage from "../PrivatcyPolicyPage/PrivatcyPolicyPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import TermsPage from "../TermsPage/TermsPage";

const NavigationPage = ()=> {
    return (
        <Routes>
            <Route path="/cookies" element={<CookiesPolicyPage/>}/>
            {/* <Route path="/explore" element={<ExplorePage/>}/> */}
            <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/learnmore" element={<LearnMorePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<RegistrationPage/>}/>
            {/* <Route path="/messages" element={<MessagesPage/>}/> */}
            <Route path="*" element={<NotFoundPage/>}/>
            {/* <Route path="/notification" element={<NotificationPage/>}/>
            <Route path="/search" element={<SearchPage/>}/> */}
            <Route path="/privatpolicy" element={<PrivatcyPolicyPage/>}/>
            {/* <Route path="/profilePage" element={<ProfilePage/>}/> */}
            <Route path="/terms" element={<TermsPage/>}/>

        </Routes>
    )
}

export default NavigationPage;