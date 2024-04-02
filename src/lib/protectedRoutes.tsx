// LIBRARIES
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ComponentType } from "react";

interface ProtectedRoutesInterface {
  component: ComponentType<any>;
}

const ProtectedRoutes = ({ component: Component, ...rest }: ProtectedRoutesInterface) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  // checked if not authenticated will then redirect the user to authentication page else render the layout component
  if (!isAuthenticated && isAuthenticated != null) {
    return <Navigate to="/" replace={true} />;
  }
  return <Component {...rest} />;
};

export default ProtectedRoutes;
