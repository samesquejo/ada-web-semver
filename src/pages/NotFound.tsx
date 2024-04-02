import { ArrowBackIcon } from "@chakra-ui/icons";
import { AbsoluteCenter, Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  //TODO: ADD 404 UI
  return (
    <Box h="100vh">
      <AbsoluteCenter >
        <Heading textAlign="center" mb="12px">
          404 <br /> PAGE NOT FOUND!
        </Heading>

        <Button leftIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>Go back</Button>
      </AbsoluteCenter>
    </Box>
  );
};

export default NotFound;
