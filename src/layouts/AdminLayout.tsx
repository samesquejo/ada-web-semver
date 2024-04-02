import { Box, Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";

// todo: redirect logic if not authenticated

const AdminLayout = () => (
  <Flex>
    <AdminSidebar />

    <Box as="main" w="full" pb="10" ml="280px">
      <AdminHeader />

      <Container as="section" maxW="7xl" mt="10" px="10">
        <Outlet />
      </Container>
    </Box>
  </Flex>
);

export default AdminLayout;
