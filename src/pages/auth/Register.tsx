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

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = () => navigate("/admin/dashboard");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="admin@make.technology" />
      </FormControl>

      <FormControl mt="4" isRequired>
        <Flex gap="2" flexWrap="wrap">
          <FormLabel>Password</FormLabel>
          <Link
            color="admin.secondary.500"
            href="#"
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
          />
          <InputRightElement onClick={handleTogglePassword}>
            {showPassword ? (
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
        Not registered yet?
        <Link color="admin.secondary.500" href="#" ml="1" fontWeight="600">
          Create an account
        </Link>
      </Text>
    </Box>
  );
};

export default Register;
