import UserHeader from "@/components/UserHeader";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

// todo: redirect logic if not authenticated
// todo: add ui

const UserLayout = () => (
  <Flex direction="column">
    {/* todo: will be replace by users nav component */}
    <UserHeader />
    <Box as="main" w="full" pb="10" m="auto">
      <Container as="section" maxW="7xl" mt="10" px="10">
        <Outlet />
      </Container>
    </Box>
  </Flex>
);

export default UserLayout;
