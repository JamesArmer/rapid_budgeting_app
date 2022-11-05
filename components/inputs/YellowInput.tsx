import {
  Input,
  InputLeftElement,
  InputGroup,
  Box,
  Text,
} from "@chakra-ui/react";

export default function YellowInput({
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
          color="#FFC90C"
          fontSize="1.2em"
          children="£"
          fontWeight="bold"
        />
        <Input
          isReadOnly
          isInvalid
          errorBorderColor="#BD9710"
          focusBorderColor="#BD9710"
          background="#FFF1BE"
          className="text-yellow-main"
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
