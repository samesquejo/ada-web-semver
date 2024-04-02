import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import TableHeader from "./UI/TableHeader";
import TablePagination from "./UI/TablePagination";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import useAdminHook from "@/hooks/useAdminHook";

const DataTable = () => {
  const { getUsers } = useAdminHook();
  const { data } = getUsers();
  return (
    <>
      <TableContainer
        rounded="xl"
        border="1px"
        borderColor="gray.50"
        boxShadow="md"
        py="6"
        mb="10"
      >
        <TableHeader px="6">
          <Button
            as={RouterLink}
            to="/admin/users/create"
            colorScheme="purple"
            size="sm"
          >
            New User
          </Button>
        </TableHeader>

        <Table variant="simple" my="4">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th></Th>
            </Tr>
          </Thead>

          <Tbody>
            {data?.data?.data.map((x, i) => (
              <Tr key={i}>
                <Td>{x.name}</Td>
                <Td>{x.email}</Td>
                <Td isNumeric>
                  <Menu>
                    <MenuButton as={Button} size="xs" colorScheme="telegram">
                      Actions
                    </MenuButton>

                    <MenuList>
                      <MenuItem icon={<ViewIcon />}>View</MenuItem>
                      <MenuItem icon={<EditIcon />}>Edit</MenuItem>
                      <MenuItem icon={<DeleteIcon />}>Delete</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <TablePagination px="6" />
      </TableContainer>
    </>
  );
};

export default DataTable;
