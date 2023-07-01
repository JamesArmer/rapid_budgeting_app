import { QuestionIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { BiReset } from "react-icons/bi";

export default function ResetButton() {
  function HelpModal() {}

  return (
    <button aria-label="Help button">
      <QuestionIcon
        onClick={HelpModal}
        h={6}
        w={6}
        color={"blue.600"}
      ></QuestionIcon>
    </button>
  );
}
