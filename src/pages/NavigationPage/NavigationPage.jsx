import { Route, Routes } from "react-router-dom";
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
import CreatePostPage from "../CreatePostPage/CreatePostPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import Layout from "../../layouts/Layout";

const NavigationPage = () => {
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
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/profile" element={<ProfilePage />} />
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
