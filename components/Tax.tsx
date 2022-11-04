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
        <h3 className="font-bold text-2xl text-pink-main">
          How much tax are you paying?
        </h3>
      </div>
      <div className="flex">
        <Stack direction="row" spacing={6}>
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold">Income Tax</Text>
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
                  placeholder="3,758"
                  _placeholder={{ color: "inherit" }}
                  size="lg"
                  fontWeight="bold"
                />
              </InputGroup>
            </Box>
          </Flex>
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold">National Insurance</Text>
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
                  placeholder="2,490"
                  _placeholder={{ color: "inherit" }}
                  size="lg"
                  fontWeight="bold"
                />
              </InputGroup>
            </Box>
          </Flex>
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold">Student Loan</Text>
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
                  placeholder="365.85"
                  _placeholder={{ color: "inherit" }}
                  size="lg"
                  fontWeight="bold"
                />
              </InputGroup>
            </Box>
          </Flex>
        </Stack>
      </div>
    </>
  );
}
