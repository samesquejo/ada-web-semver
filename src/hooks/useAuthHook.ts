// SCHEMA"
import { PayloadType as LoginPayloadType } from "@/schema/LoginSchema";

// LIBRARIES
import APIClient from "@/services/apiClient";
import { useMutation } from "@tanstack/react-query";

// use for account Authentication
const useAuth = () => {
  const loginMutation = () => {
    const { post } = new APIClient<LoginPayloadType>("/auth/login");
    return useMutation({
      mutationFn: (data: LoginPayloadType) => post(data),
    });
  };
  return {
    loginMutation,
  };
};

export default useAuth;
