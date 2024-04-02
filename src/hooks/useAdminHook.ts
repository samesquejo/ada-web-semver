import { UserPayloadType, UsersResponse } from "@/schema/UserSchema";
import APIClient from "@/services/apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GET_USERS_CACHE_KEY } from "../../constant";

const useAdminHook = () => {
  const createUser = () => {
    const { post } = new APIClient<UserPayloadType>("/auth/register");
    return useMutation({
      mutationFn: (data: UserPayloadType) => {
        return post(data);
      },
    });
  };

  const getUsers = () => {
    const { getAll } = new APIClient<UsersResponse>("/users");
    return useQuery({
      queryKey: [GET_USERS_CACHE_KEY],
      queryFn: () => getAll(),
    });
  };

  return {
    createUser,
    getUsers,
  };
};

export default useAdminHook;
