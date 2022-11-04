import {
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

export default function Savings() {
  return (
    <>
      <div className="pl-3">
        <h3 className="font-bold text-2xl text-blue-main">Savings</h3>
      </div>
      <div className="flex">
        <Stack direction="row" spacing={6}>
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold">General</Text>
              <InputGroup className="flex-1">
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="1.2em"
                  children="£"
                />
                <Input variant="filled" placeholder="200" size="lg" />
              </InputGroup>
            </Box>
          </Flex>
        </Stack>
      </div>
    </>
  );
}
