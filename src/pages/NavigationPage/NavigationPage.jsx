import { Route, Routes } from "react-router-dom"
import CookiesPolicyPage from "../auth/documentation/CookiesPolicyPage/CookiesPolicyPage";
import ForgotPasswordPage from "../auth/ForgotPasswordPage/ForgotPasswordPage";
import HomePage from "../HomePage/HomePage";
import LearnMorePage from "../auth/documentation/LearnMorePage/LearnMorePage";
import LoginPage from "../auth/LoginPage/LoginPage";
import  SignUpPage from "../auth/SignUpPage/SignUpPage"
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import PrivatcyPolicyPage from "../auth/documentation/PrivatcyPolicyPage/PrivatcyPolicyPage";
import TermsPage from "../auth/documentation/TermsPage/TermsPage";
import PublicRoute from "../../shared/components/PublicRoute/PublicRoute";

const NavigationPage = ()=> {
    return (
        <Routes>
            <Route element={<PublicRoute/>}>
                 <Route path="/signup" element={<SignUpPage/>}/>
                 <Route path="/login" element={<LoginPage/>}/>
            </Route>
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