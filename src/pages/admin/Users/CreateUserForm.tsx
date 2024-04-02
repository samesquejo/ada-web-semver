// SCHEMA
import {
  UserPayloadType,
  Z_USER_PAYLOAD_SCHEMA as UserPayloadSchema,
} from "@/schema/UserSchema";

// LIBRARIES
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// HOOKS
import useAdminHook from "@/hooks/useAdminHook";

// COMPONENTS
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";

interface Props {
  onClose: () => void;
}

const CreateUserForm = ({ onClose }: Props) => {
  const { createUser } = useAdminHook();
  const { mutate, isSuccess, data: response } = createUser();

  const { register, handleSubmit } = useForm<UserPayloadType>({
    resolver: zodResolver(UserPayloadSchema) as any,
  });
  const onSubmit: SubmitHandler<UserPayloadType> = (data: UserPayloadType) => {
    mutate(data);
  };

  useEffect(() => {
    //TODO: Create hook for success/error message
    switch (response?.status) {
      case 200:
        //TODO: Display success message
        return onClose();
      case 422:
        //TODO: Display fields with errors
        return console.log(response.data.resource[0].msg);
      default:
        break;
    }
  }, [isSuccess]);

  return (
    <Box
      as="form"
      display="flex"
      gap="12px"
      flexDirection="column"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input {...register("name")} placeholder="Enter full name" />
      </FormControl>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input {...register("email")} placeholder="Enter email address" />
      </FormControl>

      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input {...register("username")} placeholder="Enter username" />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          {...register("password")}
          placeholder="Enter password"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm password"
        />
      </FormControl>

      <HStack justifyContent={"end"} gap={4} my={6}>
        <Button type="submit" colorScheme="blue">
          Save
        </Button>

        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
      </HStack>
    </Box>
  );
};

export default CreateUserForm;
