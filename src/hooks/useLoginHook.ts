// SCHEMA"
import { PayloadType as LoginPayloadType, Z_PAYLOAD_SCHEMA as LoginPayloadSchema } from "@/schema/LoginSchema";

// LIBRARIES
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import formatApiErrorFieldResponse from "@/lib/formatApiErrorFieldResponse";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// REDUCERS
import { setToken, setIsAuthenticated, setRole } from "@/reducers/authReducer";
import { setProfile } from "@/reducers/userReducer";

// HOOKS
import useAuthHook from "./useAuthHook";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginMutation } = useAuthHook();
  const { status, mutate, data: loginData } = loginMutation();

  const [formErrors, setFormErrors] = useState<any | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginPayloadType>({
    resolver: zodResolver(LoginPayloadSchema),
  });

  useEffect(() => {
    const LOGIN_MUTATION_STATUS = loginData?.status as any;
    const LOGIN_MUTATION_RESPONSE = loginData;
    const LOGIN_MUTATION_DATA = loginData?.data;

    // STATUS 422: Unprocessable Entity catch and format response for reusable error states and set form errors based on api validation response
    if (LOGIN_MUTATION_STATUS === 422) {
      setFormErrors(formatApiErrorFieldResponse(LOGIN_MUTATION_DATA?.resource));
    } else if (LOGIN_MUTATION_RESPONSE?.result === "OK") {
      const {
        accessToken,
        role: { title },
      } = LOGIN_MUTATION_DATA;
      // set token state with accessToken generated upon authentication
      dispatch(setToken(accessToken));

      // set isAuthenticated state when user successfuly logged in on their account
      dispatch(setIsAuthenticated(true));

      // set profile state with users data
      dispatch(setProfile(LOGIN_MUTATION_DATA));

      // set role state of the authenticated user
      dispatch(setRole(title.toLowerCase()));
      navigate("/admin");
    }
  }, [loginData]);

  // set form errors based on zod form handler
  useEffect(() => {
    if (errors) {
      setFormErrors(errors);
    }
  }, [errors]);

  const loginHandler = (payload: LoginPayloadType) => {
    mutate(payload);
  };

  return { loginHandler, formErrors, status, handleSubmit, register };
};

export default useLogin;
