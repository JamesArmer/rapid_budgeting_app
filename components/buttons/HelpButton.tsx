import { QuestionIcon } from "@chakra-ui/icons";
import ModalParent from "../modal/ModalParent";
import { useDisclosure } from "@chakra-ui/react";

export default function HelpButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <button aria-label="Help button">
      <QuestionIcon onClick={onOpen} h={6} w={6} color={"blue.600"} />
      <ModalParent isOpen={isOpen} onClose={onClose} />
    </button>
  );
}
