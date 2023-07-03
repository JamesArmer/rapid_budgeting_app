import { Input, Box, Text } from "@chakra-ui/react";

export default function YellowInput({
  name,
  title,
  titleSize,
  placeholderText,
}: {
  name: string;
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
        name={name}
        isReadOnly
        isInvalid
        errorBorderColor="#BD9710"
        focusBorderColor="#BD9710"
        background="#FFF1BE"
        className="text-yellow-main"
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
