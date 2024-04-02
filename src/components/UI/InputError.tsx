// COMPONENTS
import { Text, Box } from "@chakra-ui/react";

interface InputErrorProps {
  errorMessage: string | undefined;
}

const InputError = ({ errorMessage }: InputErrorProps) => {
  return (
    errorMessage && (
      <Box mt="10px">
        <Text color="red.500">{errorMessage}</Text>
      </Box>
    )
  );
};

export default InputError;
