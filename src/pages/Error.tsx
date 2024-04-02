import { Center, Heading, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Center h="100vh" flexDirection="column">
      <Heading as="h1" fontSize="5xl" color={"red.400"}>
        {error.status}
      </Heading>

      <Text as="h4" fontSize="2xl">
        {error.statusText}
      </Text>

      <Text color={"gray.500"}>{error.error.message}</Text>
    </Center>
  );
}
