import {
  Input,
  InputLeftElement,
  InputGroup,
  Box,
  Text,
} from "@chakra-ui/react";

export default function RedInput({
  title,
  titleSize,
  placeholderText,
}: {
  title: string;
  titleSize: string;
  placeholderText: string;
}) {
  return (
    <Box ml="3" backgroundColor="white" className="rounded-2xl p-2">
      <Text fontWeight="bold" fontSize={titleSize}>
        {title}
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
