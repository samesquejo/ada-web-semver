/**
 * USER_PROTECTED_ROUTES: consists of all default user protected pages inside user platform
 *
 * PLEASE ADD HERE IF RELATED TO BOILERPLATE
 */
// LIBRARIES
import { Route } from "react-router-dom";

// LAYOUTS
import UserLayout from "@/layouts/UserLayout";

// PAGES
import Profile from "@/pages/users/Profile";

// ROUTES
import { UserProtectedProjectBasedRoutes } from "./userProtectedProjectBasedRoutes";

// ROUTES ONLY ACCESSIBLE TO USER ROLES

export const UserProtectedRoutes = () => {
  return (
    <Route path="/user" element={<UserLayout />}>
      <Route path=":id" element={<Profile />} />

      {/* IMPORTED PROJECT BASED ROUTES */}
      {UserProtectedProjectBasedRoutes()}
    </Route>
  );
};
