// LIBRARIES
import useCookieHook from "@/hooks/useCookieHook";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// REDUCERS
import {
  setToken,
  setIsAuthenticated,
  clearAuth,
} from "@/reducers/authReducer";
import { setProfile } from "@/reducers/userReducer";

// HOOKS
import useMeHook from "./useMeHook";
import { useLocation, useNavigate } from "react-router-dom";

const useApp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { getCookie } = useCookieHook();
  const accessToken = getCookie("at");

  const { getSingle: getMyAccount } = useMeHook();
  const { data: myAccountData, refetch, isFetched } = getMyAccount();

  useEffect(() => {
    if (accessToken && accessToken != undefined) {
      // set token state with accessToken generated upon authentication
      dispatch(setToken(accessToken));

      // execute get me account hook for fetching own user's data
      refetch();
    }
  }, []);

  useEffect(() => {
    // checked if fetching user account is already done then execute correspondingly
    if (isFetched) {
      // if token expires clear auth states else set profile, authentication and token on state
      if (myAccountData === undefined || myAccountData?.status >= 400) {
        dispatch(clearAuth());
        navigate("/");
      } else if (myAccountData && myAccountData.data) {
        const ACCOUNT_DATA = myAccountData.data;

        dispatch(setProfile(ACCOUNT_DATA));
        dispatch(setIsAuthenticated(true));
        dispatch(setToken(accessToken ?? ""));

        checkAndRedirect();
      }
    }
  }, [myAccountData]);

  /**
   * checkAndRedirect will check if is authenticated and initial url in on auth screen, will redirect to admin
   */
  const checkAndRedirect = () => {
    if (location.pathname == "/") {
      navigate("/admin");
    }
  };

  return {};
};

export default useApp;
