import { QuestionIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  modalBodyOne,
  modalBodyTwo,
  modalTitleOne,
  modalTitleTwo,
} from "../../constants/Text";

export default function ResetButton() {
  const [pageNumber, setPageNumber] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function changePage() {
    if (pageNumber === 0) {
      setPageNumber(1);
    } else {
      setPageNumber(0);
    }
  }

  return (
    <button aria-label="Help button">
      <QuestionIcon onClick={onOpen} h={6} w={6} color={"blue.600"} />
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setPageNumber(0);
        }}
        size="lg"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {pageNumber === 0 ? modalTitleOne : modalTitleTwo}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="whitespace-pre-line">
            {pageNumber === 0 ? modalBodyOne : modalBodyTwo}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={changePage}>
              {pageNumber === 0 ? "Next" : "Previous"}
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                onClose();
                setPageNumber(0);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </button>
  );
}
