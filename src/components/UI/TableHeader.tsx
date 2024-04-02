import { HStack, Input, Spacer } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  px?: number | string;
  children?: ReactNode;
  searchable?: boolean;
}

const TableHeader = (props: Props) => (
  <HStack alignItems={"center"} spacing="4" px={props.px}>
    {props.searchable && <Input placeholder="Search" width="auto" />}

    <Spacer />

    {props.children}
  </HStack>
);

export default TableHeader;
