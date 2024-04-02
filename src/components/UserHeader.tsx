// LIBRARIES
import { Link as RouterLink } from "react-router-dom";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

// COMPONENTS
import {
  Avatar,
  Box,
  Container,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Button,
  Text,
} from "@chakra-ui/react";

// ASSETS
import BrandLogo from "@assets/brand.svg";

const UserHeader = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <Box pos="sticky" top="0" zIndex="999" borderBottom="1px solid #e3e3e3">
      <Container maxW="7xl">
        <Flex as="nav" p="20px" bg="#fff">
          <Image src={BrandLogo} />
          <Spacer />

          {isAuthenticated ? (
            <Menu>
              <MenuButton>
                <Avatar size="topbar" name="Make User" />
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
          ) : (
            <Box>
              <Button as={RouterLink} to="/login" variant="primary">
                <Text zIndex={1}>Login</Text>
              </Button>
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default UserHeader;
