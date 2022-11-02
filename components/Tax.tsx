import {
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

export default function Tax() {
  return (
    <>
      <div className="pl-3">
        <h3 className="font-bold text-2xl text-red-main">
          How much tax are you paying?
        </h3>
      </div>
      <div className="flex">
        <Stack direction="row" spacing={6}>
          <Flex>
            <Box ml="3">
              <Text fontWeight="bold">Income Tax</Text>
              <InputGroup className="flex-1">
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="1.2em"
                  children="£"
                />
                <Input variant="filled" placeholder="3,758" size="lg" />
              </InputGroup>
            </Box>
          </Flex>
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold">National Insurance</Text>
              <InputGroup className="flex-1">
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="1.2em"
                  children="£"
                />
                <Input variant="filled" placeholder="2,490" size="lg" />
              </InputGroup>
            </Box>
          </Flex>
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold">Student Loan</Text>
              <InputGroup className="flex-1">
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="1.2em"
                  children="£"
                />
                <Input variant="filled" placeholder="365.85" size="lg" />
              </InputGroup>
            </Box>
          </Flex>
        </Stack>
      </div>
    </>
  );
}
