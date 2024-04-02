// LIBRARIES
import { Routes } from "react-router-dom";

// ROUTES
import { AuthRoutes } from "./routes/authRoutes";
import { AdminProtectedRoutes } from "./routes/adminProtectedRoutes";
import { UserProtectedRoutes } from "./routes/userProtectedRoutes";
import { PublicRoutes } from "./routes/publicRoutes";

const router = () => {
  return (
    <Routes>
      {AdminProtectedRoutes()}
      {UserProtectedRoutes()}
      {PublicRoutes()}
      {AuthRoutes()}
    </Routes>
  );
};

export default router;
