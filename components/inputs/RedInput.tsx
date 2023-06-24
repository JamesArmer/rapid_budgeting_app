import { Input, Box, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export default function RedInput({
  title,
  titleSize,
  placeholderText,
}: {
  title: string;
  titleSize: string;
  placeholderText: string;
}) {
  const [isMediumScreen] = useMediaQuery("(min-width: 640px)");

  const splitTitle = title.split(" ");

  return (
    <Box ml="3" backgroundColor="white" className="rounded-2xl p-2">
      <Text fontWeight="bold" fontSize={titleSize}>
        {splitTitle[0]}
        {isMediumScreen ? " " : <br />}
        {splitTitle[1]}
      </Text>
      <Input
        isReadOnly
        isInvalid
        errorBorderColor="#BD1A10"
        focusBorderColor="#BD1A10"
        background="#FFCABE"
        className="text-red-light"
        variant="filled"
        placeholder={"£ " + placeholderText}
        _placeholder={{ color: "inherit" }}
        size="sm"
        fontWeight="bold"
        borderRadius="1rem"
        borderWidth="1px"
      />
    </Box>
  );
}
