// SCHEMA
import { PayloadType as LoginPayloadType } from "@/schema/LoginSchema";

// LIBRARIES
import { Link as RouterLink } from "react-router-dom";
import { SubmitHandler, FieldValues } from "react-hook-form";

// HOOKS
import useLogin from "@/hooks/useLoginHook";
import { usePasswordTypeToggle } from "@/hooks/usePasswordManagementHook";

// COMPONENTS
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import InputError from "@/components/UI/InputError";

// ASSETS
import { ArrowForwardIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  const { loginHandler, formErrors, status, register, handleSubmit } =
    useLogin();
  const { showPassword, handleTogglePassword } = usePasswordTypeToggle();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    const { email, password } = data;
    const loginPayload: LoginPayloadType = {
      email,
      password,
    };

    loginHandler(loginPayload);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="admin@make.technology"
          {...register("email")}
          isInvalid={
            Boolean(formErrors?.email?.message) ||
            Boolean(formErrors?.form?.message)
          }
        />
        <InputError errorMessage={formErrors?.email?.message} />
      </FormControl>

      <FormControl mt="4">
        <Flex gap="2" flexWrap="wrap">
          <FormLabel>Password</FormLabel>
          <Link
            as={RouterLink}
            to="/forgot-password"
            color="admin.secondary.500"
            ml="auto"
            fontSize="xs"
            fontWeight="600"
          >
            Forgot Password?
          </Link>
        </Flex>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="********"
            {...register("password")}
            isInvalid={
              Boolean(formErrors?.password?.message) ||
              Boolean(formErrors?.form?.message)
            }
          />
          <InputRightElement onClick={handleTogglePassword}>
            {showPassword ? (
              <ViewIcon color="blue.500" />
            ) : (
              <ViewOffIcon color="blue.500" />
            )}
          </InputRightElement>
        </InputGroup>
        <InputError errorMessage={formErrors?.password?.message} />
      </FormControl>

      <InputError errorMessage={formErrors?.form?.message} />

      <Button
        role="group"
        type="submit"
        variant="primary"
        isLoading={status === "pending"}
        mt="8"
      >
        <HStack zIndex={1}>
          <Text>Login</Text>
          <ArrowForwardIcon
            color="admin.secondary.500"
            transition="color 200ms ease"
            _groupHover={{ color: "white" }}
          />
        </HStack>
      </Button>

      <Text mt="2" textAlign="center" fontSize="sm">
        Not registered yet?
        <Link
          as={RouterLink}
          to="/register"
          color="admin.secondary.500"
          ml="1"
          fontWeight="600"
        >
          Create an account
        </Link>
      </Text>
    </Box>
  );
};

export default Login;
