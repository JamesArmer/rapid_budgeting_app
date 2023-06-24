import {
  Input,
  InputLeftElement,
  InputGroup,
  Box,
  Text,
} from "@chakra-ui/react";

export default function GreenInput({
  title,
  titleSize,
  placeholderText,
  htmlSize,
}: {
  title: string;
  titleSize: string;
  placeholderText: string;
  htmlSize?: number;
}) {
  return (
    <Box ml="3" backgroundColor="white" className="rounded-2xl p-2">
      <Text fontWeight="bold" fontSize={titleSize}>
        {title}
      </Text>
      <Input
        isReadOnly
        isInvalid
        errorBorderColor="#10BD21"
        focusBorderColor="#10BD21"
        background="#BEFFC5"
        className="text-green-main"
        variant="filled"
        placeholder={"£ " + placeholderText}
        _placeholder={{ color: "inherit" }}
        size="sm"
        fontWeight="bold"
        borderRadius="1rem"
        borderWidth="1px"
        htmlSize={htmlSize}
      />
    </Box>
  );
}
