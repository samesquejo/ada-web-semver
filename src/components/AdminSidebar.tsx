import { NavLink, Link as RouterLink } from "react-router-dom";
import {
  Center,
  Container,
  HStack,
  Icon,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { RxDashboard, RxPerson } from "react-icons/rx";
import BrandLogo from "@assets/brand.svg";

const navItems = [
  {
    title: "Dashboard",
    icon: RxDashboard,
    path: "/admin/dashboard",
  },
  {
    title: "Users",
    icon: RxPerson,
    path: "/admin/users",
  },
];

const Sidebar = () => (
  <Container
    as="aside"
    position="fixed"
    zIndex={1}
    bg="white"
    p="0"
    w="full"
    maxW="280px"
    h="100vh"
    shadow="md"
  >
    {/* logo */}
    <Center
      as="header"
      py="6"
      px="2"
      borderBottom="1px"
      borderColor="gray.200"
      backgroundColor="blackAlpha.100"
    >
      <Image src={BrandLogo} />
    </Center>

    {/* nav */}
    <Container as="nav" p="0">
      <List py="4">
        {navItems.map((nav, index) => (
          <ListItem
            _hover={{ bg: "admin.primary.500", color: "white" }}
            key={index}
          >
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "inherit",
                };
              }}
              to={nav.path}
              relative="path"
            />

            <HStack as={RouterLink} to={nav.path} py="2" px="4">
              <Icon as={nav.icon} />
              <Text fontWeight="500">{nav.title}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Container>
  </Container>
);

export default Sidebar;
