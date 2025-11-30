import { Route, Routes } from "react-router-dom"
import CookiesPolicyPage from "../auth/documentation/CookiesPolicyPage/CookiesPolicyPage";
import ExplorePage from "../ExplorePage/ExplorePage";
import ForgotPasswordPage from "../auth/ForgotPasswordPage/ForgotPasswordPage";
import HomePage from "../HomePage/HomePage";
import LearnMorePage from "../auth/documentation/LearnMorePage/LearnMorePage";
import LoginPage from "../auth/LoginPage/LoginPage";
import  SignUpPage from "../auth/SignUpPage/SignUpPage"
import MessagesPage from "../MessagesPage/MessagesPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import NotificationPage from "../NotificationPage/NotificationPage";
import SearchPage from "../SearchPage/SearchPage";
import PrivatcyPolicyPage from "../auth/documentation/PrivatcyPolicyPage/PrivatcyPolicyPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import TermsPage from "../auth/documentation/TermsPage/TermsPage";

const NavigationPage = ()=> {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/learnmore" element={<LearnMorePage/>}/>
            <Route path="/cookies" element={<CookiesPolicyPage/>}/>
            <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
            <Route path="/privacy" element={<PrivatcyPolicyPage/>}/>
            <Route path="/terms" element={<TermsPage/>}/>

            <Route path="/" element={<HomePage/>}/>
            
            <Route path="*" element={<NotFoundPage/>}/>
            
        </Routes>
    )
}

export default NavigationPage;