import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CookiesPolicyPage from "../auth/documentation/CookiesPolicyPage/CookiesPolicyPage";
import ForgotPasswordPage from "../auth/ForgotPasswordPage/ForgotPasswordPage";
import HomePage from "../HomePage/HomePage";
import LearnMorePage from "../auth/documentation/LearnMorePage/LearnMorePage";
import LoginPage from "../auth/LoginPage/LoginPage";
import SignUpPage from "../auth/SignUpPage/SignUpPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import PrivatcyPolicyPage from "../auth/documentation/PrivatcyPolicyPage/PrivatcyPolicyPage";
import TermsPage from "../auth/documentation/TermsPage/TermsPage";
import PublicRoute from "../../shared/components/PublicRoute/PublicRoute";
import PrivatRoute from "../../shared/components/PrivatRoute/PrivatRoute";
import ExplorePage from "../ExplorePage/ExplorePage";
import MessagesPage from "../MessagesPage/MessagesPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import EditProfilePage from "../ProfilePage/EditProfilePage.jsx";
import Layout from "../../layouts/Layout";
import {selectUser} from "../../store/auth/authSelector";

const NavigationPage = () => {
  const authUser  = useSelector(selectUser);

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>
      <Route element={<PrivatRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/profile/edit" element={<EditProfilePage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route
            path="/me"
            element={
              authUser
                ? <Navigate to={`/profile/${authUser.username}`} replace />
                : <Navigate to="/login" replace />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
      <Route path="/learnmore" element={<LearnMorePage />} />
      <Route path="/cookies" element={<CookiesPolicyPage />} />
      <Route path="/privacy" element={<PrivatcyPolicyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
};

export default NavigationPage;