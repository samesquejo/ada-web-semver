import { AbsoluteCenter, Button, Card, CardBody, Flex, Heading } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //TEMP UI
  //TODO: ADD SUCCESS PAGE UI
  return (
    <Card h="70vh">
      <CardBody>
        <AbsoluteCenter>
          <Flex direction="column" alignItems="center" justifyContent="center" gap="12px">
            <IoMdCheckmarkCircleOutline color="teal" fontSize="100px" />
            <Heading as="h3" size="xl" textAlign="center">
              Success!
            </Heading>
            <Heading as="h4" size="md" mb="12px">
              {location.state.message}
            </Heading>
            <Button leftIcon={<TiArrowBack />} colorScheme="teal" variant="solid" onClick={() => navigate(-1)}>
              Go back
            </Button>
          </Flex>
        </AbsoluteCenter>
      </CardBody>
    </Card>
  );
};

export default SuccessPage;