import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, HStack, Select, Text } from "@chakra-ui/react";

interface Props {
  px?: number | string;
}

const TablePagination = (prop: Props) => (
  <HStack justifyContent="space-between" px={prop.px}>
    <HStack gap="1">
      <Text fontSize="xs">Show: </Text>

      <Select size="xs" defaultValue="5">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </Select>
    </HStack>

    <Text fontSize="xs">1-5 of 50</Text>

    <HStack gap="2">
      <Button size="xs" variant="outline">
        <ChevronLeftIcon />
      </Button>

      <ButtonGroup size="xs" variant="ghost" spacing="1">
        <Button variant="solid" colorScheme="purple">
          1
        </Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>...</Button>
        <Button>10</Button>
      </ButtonGroup>

      <Button size="xs" variant="outline">
        <ChevronRightIcon />
      </Button>
    </HStack>
  </HStack>
);

export default TablePagination;
