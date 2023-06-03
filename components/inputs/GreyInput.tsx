import {
  Input,
  InputLeftElement,
  InputGroup,
  Box,
  Text,
} from "@chakra-ui/react";

export default function GreyInput({
  name,
  title,
  titleSize,
  placeholderText,
  defaultValue,
  resetValue,
  htmlSize,
  onBlur,
}: {
  name: string;
  title: string;
  titleSize: string;
  placeholderText?: string;
  defaultValue?: string;
  resetValue?: boolean;
  htmlSize?: number;
  onBlur: Function;
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
          name={name}
          variant="filled"
          placeholder={placeholderText}
          defaultValue={defaultValue}
          size="md"
          htmlSize={htmlSize}
          borderRadius="1rem"
          onBlur={(e) => {
            localStorage.setItem(name, e.target.value);
            onBlur();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              localStorage.setItem(name, e.currentTarget.value);
              onBlur();
            }
          }}
        />
      </InputGroup>
    </Box>
  );
}
