// LIBRARIES
import { useQuery } from "@tanstack/react-query";
import RequestHeaders from "@/lib/requestHeader";

// SERVICES
import APIClient from "@/services/apiClient";

// SCHEMA
import { UserResponse } from "@/schema/UserSchema";

const { headers } = RequestHeaders();

const useMe = () => {
  const { getOne } = new APIClient<UserResponse>("/users/me");
  const getSingle = () => {
    return useQuery({
      queryKey: ["me-details"],
      queryFn: () => getOne({ headers }),
      enabled: false,
    });
  };

  return {
    getSingle,
  };
};

export default useMe;
