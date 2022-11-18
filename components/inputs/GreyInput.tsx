import {
  Input,
  InputLeftElement,
  InputGroup,
  Box,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

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
  var inputValue;

  useEffect(() => {
    if (resetValue === true) {
      inputValue = "";
    }
  }, []);

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
          value={inputValue}
          size="lg"
          htmlSize={htmlSize}
          borderRadius="1rem"
          onBlur={(e) => {
            localStorage.setItem(name, e.target.value);
            onBlur();
          }}
        />
      </InputGroup>
    </Box>
  );
}
