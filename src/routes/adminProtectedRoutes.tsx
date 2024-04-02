/**
 * ADMIN_PROTECTED_ROUTES: consists of all default admin protected pages inside admin platform
 *
 * PLEASE ADD HERE IF RELATED TO BOILERPLATE
 */

// LIBRARIES
import ProtectedRoutes from "@/lib/protectedRoutes";
import { Route } from "react-router-dom";

// LAYOUT
import AdminLayout from "@/layouts/AdminLayout";

// PAGES
import Dashboard from "@/pages/admin/Dashboard";
import Users from "@/pages/admin/Users";
import SuccessPage from "@/pages/SuccessPage";

// ROUTES ONLY ACCESSIBLE TO ADMIN ROLES
export const AdminProtectedRoutes = () => {
  return (
    <Route path="/admin" element={<ProtectedRoutes component={AdminLayout} />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="users">
        <Route index element={<Users />} />
      </Route>
      <Route path="success" element={<SuccessPage />} />
    </Route>
  );
};
