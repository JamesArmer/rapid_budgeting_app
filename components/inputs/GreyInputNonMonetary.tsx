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
  htmlSize,
  onBlur,
}: {
  name: string;
  title: string;
  titleSize: string;
  placeholderText?: string;
  defaultValue?: string;
  htmlSize?: number;
  onBlur: Function;
}) {
  return (
    <Box ml="3" backgroundColor="white" className="rounded-2xl p-2">
      <Text fontWeight="bold" fontSize={titleSize}>
        {title}
      </Text>
      <Input
        name={name}
        variant="filled"
        placeholder={placeholderText}
        defaultValue={defaultValue}
        size="lg"
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
    </Box>
  );
}
