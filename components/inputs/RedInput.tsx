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
    <Box ml="3">
      <Text fontWeight="bold" fontSize={titleSize}>
        {title}
      </Text>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="#DF3600"
          fontSize="1.2em"
          children="£"
          fontWeight="bold"
        />
        <Input
          isReadOnly
          isInvalid
          errorBorderColor="#BD1A10"
          focusBorderColor="#BD1A10"
          background="#FFCABE"
          className="text-red-light"
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
