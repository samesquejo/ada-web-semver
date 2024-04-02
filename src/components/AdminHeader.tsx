import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Header = () => (
  <HStack as="header" p="4" justifyContent="space-between">
    <Breadcrumb fontSize="xs" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink as={RouterLink} to="/admin/dashboard">
          Admin
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>Dashboard</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <Menu>
      <MenuButton>
        <Avatar size="topbar" name="Make Admin" />
      </MenuButton>

      <MenuList>
        <MenuItem as={RouterLink} to="">
          Change Password
        </MenuItem>
        <MenuItem as={RouterLink} to="/">
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  </HStack>
);

export default Header;
