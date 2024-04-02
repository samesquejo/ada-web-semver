import { ArrowForwardIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showNewPassword, setNewShowPassword] = useState<boolean>(false);
  const [showOldPassword, setOldShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setConfirmShowPassword] =
    useState<boolean>(false);

  const handleTogglePassword = (param: string) => {
    // prevent default form submission
    switch (param) {
      case "new":
        return setNewShowPassword((prevShowPassword) => !prevShowPassword);
      case "old":
        return setOldShowPassword((prevShowPassword) => !prevShowPassword);
      default:
        return setConfirmShowPassword((prevShowPassword) => !prevShowPassword);
    }
  };

  const handleSubmit = () => navigate("/admin/dashboard");

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl mt="4" isRequired>
        <Flex gap="2" flexWrap="wrap">
          <FormLabel>Old Password</FormLabel>
        </Flex>
        <InputGroup>
          <Input
            type={showNewPassword ? "text" : "password"}
            placeholder="********"
          />
          <InputRightElement
            onClick={(e) => {
              e.preventDefault();
              handleTogglePassword("new");
            }}
          >
            {showNewPassword ? (
              <ViewIcon color="blue.500" />
            ) : (
              <ViewOffIcon color="blue.500" />
            )}
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl mt="4" isRequired>
        <Flex gap="2" flexWrap="wrap">
          <FormLabel>New Password</FormLabel>
        </Flex>
        <InputGroup>
          <Input
            type={showOldPassword ? "text" : "password"}
            placeholder="********"
          />
          <InputRightElement
            onClick={(e) => {
              e.preventDefault();
              handleTogglePassword("old");
            }}
          >
            {showOldPassword ? (
              <ViewIcon color="blue.500" />
            ) : (
              <ViewOffIcon color="blue.500" />
            )}
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl mt="4" isRequired>
        <Flex gap="2" flexWrap="wrap">
          <FormLabel>Confirm Password</FormLabel>
        </Flex>
        <InputGroup>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="********"
          />
          <InputRightElement
            onClick={(e) => {
              e.preventDefault();
              handleTogglePassword("confirm");
            }}
          >
            {showConfirmPassword ? (
              <ViewIcon color="blue.500" />
            ) : (
              <ViewOffIcon color="blue.500" />
            )}
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button role="group" type="submit" mt="8" variant="primary">
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
        Do you have a account?
        <Link color="admin.secondary.500" href="#" ml="1" fontWeight="600">
          Login
        </Link>
      </Text>
    </Box>
  );
};

export default ResetPassword;
