import {
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

export default function Income() {
  return (
    <>
      <div className="flex">
        <Stack direction="row" spacing={6}>
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold" fontSize="xl">
                Net Income (Yearly)
              </Text>
              <InputGroup className="flex-1">
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="1.2em"
                  children="£"
                />
                <Input variant="filled" placeholder="24,746" size="lg" />
              </InputGroup>
            </Box>
          </Flex>
          <Flex className="flex-1">
            <Box ml="3">
              <Text fontWeight="bold" fontSize="xl">
                Net Income (Monthly)
              </Text>
              <InputGroup className="flex-1">
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="1.2em"
                  children="£"
                />
                <Input variant="filled" placeholder="2,062.21" size="lg" />
              </InputGroup>
            </Box>
          </Flex>
        </Stack>
      </div>
    </>
  );
}
