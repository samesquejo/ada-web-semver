import { Outlet } from "react-router-dom";
import { Center, Container } from "@chakra-ui/react";

// todo: redirect logic if already authenticated

const AuthLayout = () => (
  <Center h="100vh" py="4">
    <Container maxW="lg">
      <Outlet />
    </Container>
  </Center>
);

export default AuthLayout;
