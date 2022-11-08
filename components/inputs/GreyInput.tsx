import {
  Input,
  InputLeftElement,
  InputGroup,
  Box,
  Text,
} from "@chakra-ui/react";

export default function GreyInput({
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
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.500"
          fontSize="1.2em"
          children="£"
        />
        <Input
          variant="filled"
          placeholder={placeholderText}
          size="lg"
          htmlSize={htmlSize}
          borderRadius="1rem"
        />
      </InputGroup>
    </Box>
  );
}
