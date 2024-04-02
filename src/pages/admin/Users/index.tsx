// LIBRARIES
import { useEffect } from "react";

// HOOKS
import useAdminHook from "@/hooks/useAdminHook";

// COMPONENTS
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import CreateUserForm from "./CreateUserForm";
import { UserSchema } from "@/schema/UserSchema";
import Modal from "@/components/Modal";
import UITable from "@/components/UI/UITable";

// ASSETS
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const Users = () => {
  const { getUsers } = useAdminHook();
  const { data, refetch } = getUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const header = (
    <Button colorScheme="purple" size="sm" onClick={onOpen}>
      New User
    </Button>
  );

  useEffect(() => {
    refetch();
  }, [isOpen]);

  return (
    <>
      <Modal header="Create User" isOpen={isOpen} onClose={onClose}>
        <CreateUserForm onClose={onClose} />
      </Modal>
      <UITable
        header={header}
        headers={["Fullname", "email", "status", "date"]}
      >
        {data?.data.map((user: UserSchema, i: number) => (
          <Tr key={i}>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.status}</Td>
            <Td>{user.createdAt}</Td>
            <Td isNumeric>
              <Menu>
                <MenuButton as={Button} size="xs" colorScheme="telegram">
                  Actions
                </MenuButton>

                <MenuList>
                  <MenuItem icon={<EditIcon />}>Edit</MenuItem>
                  <MenuItem icon={<DeleteIcon />}>Delete</MenuItem>
                </MenuList>
              </Menu>
            </Td>
          </Tr>
        ))}
      </UITable>
    </>
  );
};

export default Users;
