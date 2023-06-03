import { Box, Button } from "@chakra-ui/react";
import { BiReset } from "react-icons/bi";

export default function ResetButton({ onClick }: { onClick: Function }) {
  return (
    <Box
      ml="3"
      backgroundColor="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      className="rounded-2xl p-2"
    >
      <Button
        leftIcon={<BiReset color="white" size="30" />}
        backgroundColor="#F44D71"
        color="white"
        size="md"
        onClick={() => {
          onClick();
        }}
      >
        Reset
      </Button>
    </Box>
  );
}
