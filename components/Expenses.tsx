import {
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

export default function Expenses() {
  return (
    <>
      <div className="pl-3">
        <h3 className="font-bold text-2xl text-blue-main">Monthly Expenses</h3>
      </div>
      <div className="flex">
        <Stack direction="row" spacing={3}>
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold">Rent</Text>
              <InputGroup className="flex-1">
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="1.2em"
                  children="£"
                />
                <Input variant="filled" placeholder="900" size="lg" />
              </InputGroup>
            </Box>
          </Flex>
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold">Bills</Text>
              <InputGroup className="flex-1">
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="1.2em"
                  children="£"
                />
                <Input variant="filled" placeholder="60" size="lg" />
              </InputGroup>
            </Box>
          </Flex>
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold">Subscriptions</Text>
              <InputGroup className="flex-1">
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="1.2em"
                  children="£"
                />
                <Input variant="filled" placeholder="54" size="lg" />
              </InputGroup>
            </Box>
          </Flex>
        </Stack>
      </div>
    </>
  );
}
