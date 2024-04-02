/**
 * PUBLIC_ROUTES: consists of all default public pages
 *
 * PLEASE ADD HERE IF RELATED TO BOILERPLATE
 */

// LIBRARIES
import { Route } from "react-router-dom";

// PAGES
import NotFound from "@/pages/NotFound";

// ROUTES
import { PublicProjectBasedRoutes } from "./publicProjectBasedRoutes";

// ROUTES CAN BE ACCESS BY ALL ROLES
export const PublicRoutes = () => {
  return (
    <>
      {PublicProjectBasedRoutes()}
      <Route path="*" element={<NotFound />} />
    </>
  );
};
