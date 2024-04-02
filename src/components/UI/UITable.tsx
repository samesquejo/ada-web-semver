import { TableContainer, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import TablePagination from "@components/UI/TablePagination";
import TableHeader from "@/components/UI/TableHeader";

interface Props {
  header?: React.ReactNode;
  children?: React.ReactNode;
  headers: Array<string>;
}

const UITable = (props: Props) => {
  return (
    <>
      <TableContainer rounded="xl" border="1px" borderColor="gray.50" boxShadow="md" py="6" mb="10">
        <TableHeader px={6} children={props.header} />

        <Table variant="simple" my="4">
          <Thead>
            <Tr>
              {props.headers.map((header, i) => (
                <Th key={i}>{header}</Th>
              ))}
              <Th></Th>
            </Tr>
          </Thead>

          <Tbody>{props.children}</Tbody>
        </Table>

        <TablePagination px="6" />
      </TableContainer>
    </>
  );
};

export default UITable;
