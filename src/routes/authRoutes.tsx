/**
 * AUTH_ROUTES: consists of all default auth pages
 *
 * PLEASE ADD HERE IF RELATED TO BOILERPLATE
 */

// LIBRARIES
import { Route } from "react-router-dom";

// LAYOUTS
import AuthLayout from "@/layouts/AuthLayout";

// PAGES
import Login from "@/pages/auth/Login";
import ErrorPage from "@/pages/Error";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";

// ROUTES USED FOR AUTHENTICATION
export const AuthRoutes = () => {
  return (
    <Route path="/" element={<AuthLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
    </Route>
  );
};
