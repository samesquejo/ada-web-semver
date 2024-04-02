import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { ReactNode } from "react";

//INITIAL
//TODO: Create reusable modal

interface Props {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  children: ReactNode;
}

const Modal = (props: Props) => {
  return (
    <ChakraModal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.header}</ModalHeader>
        <ModalCloseButton onClick={() => props.onClose()} />
        <ModalBody>{props.children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
