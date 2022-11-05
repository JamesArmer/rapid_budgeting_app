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
}: {
  title: string;
  titleSize: string;
  placeholderText: string;
}) {
  return (
    <Box ml="3">
      <Text fontWeight="bold" fontSize={titleSize}>
        {title}
      </Text>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="#5CC25A"
          fontSize="1.2em"
          children="£"
          fontWeight="bold"
        />
        <Input
          isReadOnly
          isInvalid
          errorBorderColor="#10BD21"
          focusBorderColor="#10BD21"
          background="#BEFFC5"
          className="text-green-main"
          variant="filled"
          placeholder={placeholderText}
          _placeholder={{ color: "inherit" }}
          size="lg"
          fontWeight="bold"
        />
      </InputGroup>
    </Box>
  );
}
