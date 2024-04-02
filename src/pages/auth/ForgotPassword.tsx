import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = () => navigate("/admin/dashboard");

  return (
    <>
      <Heading size="lg" textAlign="center" mb="8">
        Forgot Password
      </Heading>

      <Box as="form" onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="admin@make.technology" />
        </FormControl>

        <Button role="group" type="submit" mt="8" variant="primary">
          <HStack zIndex={1}>
            <Text fontSize="sm">Send Reset Password Link</Text>
            <ArrowForwardIcon
              color="admin.secondary.500"
              transition="color 200ms ease"
              _groupHover={{ color: "white" }}
            />
          </HStack>
        </Button>
      </Box>
    </>
  );
};

export default ForgotPassword;
