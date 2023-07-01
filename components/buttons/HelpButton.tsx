import { QuestionIcon } from "@chakra-ui/icons";

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
