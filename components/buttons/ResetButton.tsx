import { Box, Button } from "@chakra-ui/react";
import { BiReset } from "react-icons/bi";
import { useMediaQuery } from "@chakra-ui/react";

export default function ResetButton({ onClick }: { onClick: Function }) {
  const [isMediumScreen] = useMediaQuery("(min-width: 640px)");

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
        leftIcon={<BiReset color="white" size={isMediumScreen ? "30" : "25"} />}
        color="white"
        backgroundColor="#F44D71"
        colorScheme="pink"
        size={isMediumScreen ? "md" : "sm"}
        onClick={() => {
          onClick();
        }}
        height={isMediumScreen ? "40px" : "60px"}
      >
        Reset
      </Button>
    </Box>
  );
}
